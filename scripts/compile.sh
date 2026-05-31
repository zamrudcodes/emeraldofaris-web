#!/usr/bin/env bash
# B7P Wiki Compile Script
# Runs on VPS via cron. Ingests new raw data, compiles wiki, pushes.

set -euo pipefail

WIKI_DIR="/home/ubuntu/b7p-wiki"
LOG_FILE="/home/ubuntu/b7p-wiki/scripts/compile.log"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

log "=== Starting B7P Wiki Compile ==="

# 1. Pull latest from GitHub
log "Pulling latest from origin..."
cd "$WIKI_DIR"
git pull origin main 2>&1 | tee -a "$LOG_FILE" || log "⚠️ Pull failed or no changes"

# 2. Ingest new data (placeholder — to be extended)
log "Checking for new raw data..."
# TODO: Pull from ESB ERP
# TODO: Pull from review monitor
# TODO: Pull from social scrapes
NEW_DATA=false

# Check review state file for freshness
if [ -f /home/ubuntu/.hermes/cache/7pr_review_state.json ]; then
    REVIEW_AGE=$(($(date +%s) - $(stat -c %Y /home/ubuntu/.hermes/cache/7pr_review_state.json)))
    log "Review data age: ${REVIEW_AGE}s ($((REVIEW_AGE / 3600))h)"
    if [ "$REVIEW_AGE" -lt 7200 ]; then
        log "✅ Review data fresh (<2h)"
    else
        log "⚠️ Review data stale"
    fi
fi

# 3. Run health check
log "Running wiki health check..."
HEALTH_FILE="$WIKI_DIR/outputs/wiki_health_check.md"
echo "# B7P Wiki Health Check — $(date '+%Y-%m-%d %H:%M')" > "$HEALTH_FILE"
echo "" >> "$HEALTH_FILE"

ARTICLE_COUNT=$(find "$WIKI_DIR/wiki" -name "*.md" | wc -l)
RAW_COUNT=$(find "$WIKI_DIR/raw" -name "*.md" | wc -l)
echo "- **Articles:** $ARTICLE_COUNT" >> "$HEALTH_FILE"
echo "- **Raw sources:** $RAW_COUNT" >> "$HEALTH_FILE"
echo "- **Last compile:** $(date '+%Y-%m-%d %H:%M:%S')" >> "$HEALTH_FILE"

log "Health: $ARTICLE_COUNT articles, $RAW_COUNT raw sources"

# 4. Commit and push if changes
if ! git diff --quiet || ! git diff --cached --quiet; then
    log "Changes detected, committing..."
    git add -A
    git commit -m "Auto-compile: $(date '+%Y-%m-%d %H:%M') — health check + data refresh" 2>&1 | tee -a "$LOG_FILE"
    git push origin main 2>&1 | tee -a "$LOG_FILE"
    log "✅ Pushed to GitHub"
else
    log "No changes to commit"
fi

log "=== Compile complete ==="
echo ""
