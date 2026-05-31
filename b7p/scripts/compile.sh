#!/usr/bin/env bash
# B7P Wiki Compile Script — Monorepo Edition
# Runs on VPS via cron. Ingests new raw data, compiles B7P wiki, pushes.

set -euo pipefail

REPO_DIR="/home/ubuntu/b7p-wiki"
B7P_DIR="$REPO_DIR/b7p"
LOG_FILE="$B7P_DIR/scripts/compile.log"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

log "=== Starting B7P Wiki Compile ==="

# 1. Pull latest from GitHub
log "Pulling latest from origin..."
cd "$REPO_DIR"
git pull origin main 2>&1 | tee -a "$LOG_FILE" || log "⚠️ Pull failed or no changes"

# 2. Check for new data
log "Checking data freshness..."
REVIEW_FILE="/home/ubuntu/.hermes/cache/7pr_review_state.json"
if [ -f "$REVIEW_FILE" ]; then
    REVIEW_AGE=$(($(date +%s) - $(stat -c %Y "$REVIEW_FILE")))
    log "Review data age: ${REVIEW_AGE}s ($((REVIEW_AGE / 3600))h)"
fi

SALES_COUNT=$(find "$B7P_DIR/raw/sales" -name "*.md" | wc -l)
log "Sales files: $SALES_COUNT"

# 3. Health check
log "Running health check..."
HEALTH_FILE="$B7P_DIR/outputs/wiki_health_check.md"
mkdir -p "$(dirname "$HEALTH_FILE")"
echo "# B7P Wiki Health Check — $(date '+%Y-%m-%d %H:%M')" > "$HEALTH_FILE"
echo "" >> "$HEALTH_FILE"
echo "- **Articles:** $(find "$B7P_DIR/wiki" -name '*.md' | wc -l)" >> "$HEALTH_FILE"
echo "- **Sales data points:** $SALES_COUNT" >> "$HEALTH_FILE"
echo "- **Last check:** $(date '+%Y-%m-%d %H:%M:%S')" >> "$HEALTH_FILE"

# 4. Commit and push if changes
if ! git diff --quiet || ! git diff --cached --quiet; then
    log "Changes detected, committing..."
    git add -A
    git commit -m "Auto-compile B7P: $(date '+%Y-%m-%d %H:%M') — monorepo sync" 2>&1 | tee -a "$LOG_FILE"
    git push origin main 2>&1 | tee -a "$LOG_FILE"
    log "✅ Pushed to GitHub"
else
    log "No changes to commit"
fi

log "=== Compile complete ==="
