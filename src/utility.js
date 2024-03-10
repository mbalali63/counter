


export default function formatElapsedTime(totalSeconds) {
    if (totalSeconds !== ''){
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds - 3600 * h) / 60);
        const s = totalSeconds - 3600 * h - 60 * m;
        const hStr = h < 10 ? `0${h.toString()}` : h.toString();
        const mStr = m < 10 ? `0${m.toString()}` : m.toString();
        const sStr = s < 10 ? `0${s.toString()}` : s.toString();
        return `${hStr}:${mStr}:${sStr}`;
    } else {
        return;
    }
}