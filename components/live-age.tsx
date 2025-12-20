"use client";

import { useState, useEffect } from "react";

// Birth date: January 1, 1993 at 04:30 WIB (UTC+7)
// WIB is UTC+7, so 04:30 WIB = 21:30 UTC on Dec 31, 1992
const BIRTH_DATE_UTC = new Date(Date.UTC(1992, 11, 31, 21, 30, 0));

interface Duration {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

function calculateAge(birthDate: Date): Duration {
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    let hours = now.getHours() - birthDate.getHours();
    let minutes = now.getMinutes() - birthDate.getMinutes();
    let seconds = now.getSeconds() - birthDate.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const prevMonthDate = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonthDate.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    return { years, months, days, hours, minutes, seconds };
}

export function LiveAge() {
    const [age, setAge] = useState<Duration | null>(null);

    useEffect(() => {
        const updateAge = () => {
            setAge(calculateAge(BIRTH_DATE_UTC));
        };

        updateAge(); // Initial calculation
        const interval = setInterval(updateAge, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!age) {
        // Render placeholder for SSR/hydration
        return <span className="text-muted-foreground">Loading...</span>;
    }

    return (
        <span>
            {age.years} years, {age.months} months, {age.days} days, {age.hours} hours, {age.minutes} minutes, and {age.seconds} seconds
        </span>
    );
}
