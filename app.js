"use strict";
const { useState, useEffect } = React;
const MINT = "#2ee6db", MINT_DEEP = "#12a89e", VIOLET = "#7b5cff", BG = "#0e0b22";
const CARD = "rgba(255,255,255,0.045)", BORDER = "rgba(123,92,255,0.22)";
function Phone({ children }) {
    return (React.createElement("div", { className: "w-full relative flex flex-col", style: { height: "100dvh", background: `linear-gradient(180deg,#150f33 0%,${BG} 100%)` } },
        React.createElement("div", { className: "flex-1 overflow-y-auto relative" }, children)));
}
function InviteScreen({ go }) {
    return (React.createElement("div", { className: "h-full flex flex-col items-center justify-between px-8 pt-14 pb-10 text-center relative overflow-hidden screen-enter" },
        React.createElement("div", { className: "absolute inset-0", style: { background: `radial-gradient(circle at 50% 30%, rgba(123,92,255,0.35), transparent 60%)` } }),
        React.createElement("div", null),
        React.createElement("div", { className: "relative z-10 flex flex-col items-center" },
            React.createElement("div", { className: "w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6", style: { background: `linear-gradient(145deg,${VIOLET},#4c33b8)`, border: "2px solid rgba(255,255,255,0.15)" } }, "A"),
            React.createElement("h1", { className: "text-white text-[22px] font-bold sora" }, "Aarav invites you to join"),
            React.createElement("p", { className: "text-neutral-400 text-[14px] mt-2" }, "Walk, earn rewards, and cash out real prizes")),
        React.createElement("div", { className: "relative z-10 w-full flex flex-col items-center gap-4" },
            React.createElement("button", { onClick: () => go("rewards"), className: "tap-scale w-full py-4 rounded-2xl font-bold text-[14px] sora", style: { background: "white", color: "#150f33" } }, "Accept Invite"))));
}
const tiers = [5, 10, 20, 50, 100, 200, 500, 1000];
function RewardCircle({ amount, onClick, delay }) {
    const r = 30, c = 2 * Math.PI * r;
    return (React.createElement("button", { onClick: onClick, className: "tap-scale card-enter flex flex-col items-center gap-2 p-3 rounded-2xl", style: { background: CARD, border: `1px solid ${BORDER}`, animationDelay: `${delay}ms` } },
        React.createElement("div", { className: "relative w-[74px] h-[74px] flex items-center justify-center" },
            React.createElement("svg", { width: "74", height: "74", className: "absolute inset-0 -rotate-90" },
                React.createElement("circle", { cx: "37", cy: "37", r: r, stroke: "rgba(255,255,255,0.08)", strokeWidth: "5", fill: "none" }),
                React.createElement("circle", { cx: "37", cy: "37", r: r, stroke: MINT, strokeWidth: "5", fill: "none", strokeDasharray: c, strokeDashoffset: c * 0.12, strokeLinecap: "round" })),
            React.createElement("span", { className: "text-white font-extrabold text-[15px] sora" },
                "$",
                amount)),
        React.createElement("p", { className: "text-[10.5px] text-neutral-400 text-center leading-snug" }, "Available to redeem now")));
}
function RewardsScreen({ go, pick }) {
    return (React.createElement("div", { className: "h-full flex flex-col relative z-10 screen-enter" },
        React.createElement("div", { className: "px-6 pt-6 pb-2 flex items-center justify-between" },
            React.createElement("h2", { className: "text-white text-[20px] font-bold sora" }, "Rewards")),
        React.createElement("div", { className: "px-6 mt-2 rounded-2xl p-5", style: { background: `linear-gradient(140deg,#2a1f5c,#150f33)`, border: `1px solid ${BORDER}` } },
            React.createElement("p", { className: "text-neutral-400 text-[11px] font-bold uppercase", style: { letterSpacing: "1px" } }, "Your Highest Reward"),
            React.createElement("div", { className: "flex items-center gap-3 mt-3" },
                React.createElement("div", { className: "w-12 h-12 rounded-full flex items-center justify-center text-xl", style: { background: `linear-gradient(145deg,#f4c860,#c9932c)` } }, "\uD83E\uDE99"),
                React.createElement("div", null,
                    React.createElement("p", { className: "text-white font-extrabold text-[18px] sora" }, "USD 100"),
                    React.createElement("p", { className: "text-neutral-400 text-[11.5px]" }, "Invite more people to unlock your next reward.")))),
        React.createElement("div", { className: "px-6 mt-6 grid grid-cols-2 gap-3 pb-6" }, tiers.map((t, i) => React.createElement(RewardCircle, { key: t, amount: t, delay: i * 40, onClick: () => { pick(t); go("claim"); } })))));
}
function ClaimScreen({ go, amount }) {
    const invitesUsed = Math.round(amount * 8.33), coinsUsed = Math.round(amount * 333.2);
    return (React.createElement("div", { className: "h-full flex flex-col relative z-10 screen-enter px-6 pt-10" },
        React.createElement("div", { className: "text-center mb-6" },
            React.createElement("p", { className: "text-neutral-400 text-[13px] font-semibold" }, "Claim Your Reward"),
            React.createElement("p", { className: "text-white font-extrabold text-[40px] mt-1 sora" },
                "$",
                amount,
                React.createElement("span", { className: "text-[16px] text-neutral-400 ml-1" }, "USD"))),
        React.createElement("div", { className: "rounded-2xl p-4", style: { background: CARD, border: `1px solid ${BORDER}` } },
            React.createElement("div", { className: "flex items-center justify-between py-3", style: { borderBottom: `1px solid ${BORDER}` } },
                React.createElement("p", { className: "text-white text-[13px] font-semibold" }, "\uD83D\uDC65 Invites"),
                React.createElement("p", { className: "font-bold text-[14px] sora", style: { color: "#ff8a5c" } },
                    "- ",
                    invitesUsed)),
            React.createElement("div", { className: "flex items-center justify-between py-3" },
                React.createElement("p", { className: "text-white text-[13px] font-semibold" }, "\uD83E\uDE99 StepCoins"),
                React.createElement("p", { className: "font-bold text-[14px] sora", style: { color: MINT } },
                    "- ",
                    coinsUsed.toLocaleString()))),
        React.createElement("div", { className: "flex-1" }),
        React.createElement("div", { className: "pb-10 flex flex-col gap-3" },
            React.createElement("button", { onClick: () => go("processing"), className: "tap-scale w-full py-4 rounded-2xl font-bold text-[14px] sora", style: { background: `linear-gradient(135deg,#45f5ea,${MINT},${MINT_DEEP})`, color: "#031715" } }, "CONFIRM & CLAIM"),
            React.createElement("button", { onClick: () => go("rewards"), className: "tap-scale w-full py-3 rounded-2xl font-semibold text-[13px] text-neutral-400" }, "Cancel"))));
}
function Processing({ go }) {
    useEffect(() => { const t = setTimeout(() => go("success"), 2000); return () => clearTimeout(t); }, []);
    return (React.createElement("div", { className: "h-full flex flex-col items-center justify-center relative z-10 screen-enter" },
        React.createElement("div", { className: "w-16 h-16 rounded-full mb-8", style: { border: `4px solid rgba(255,255,255,0.1)`, borderTopColor: MINT, animation: "spin 0.9s linear infinite" } }),
        React.createElement("div", { className: "flex gap-2 mb-4" }, [0, 1, 2].map(i => React.createElement("div", { key: i, className: "w-2.5 h-2.5 rounded-full dot", style: { background: MINT, animationDelay: `${i * 0.15}s` } }))),
        React.createElement("p", { className: "text-neutral-400 text-[13px] font-semibold sora" }, "minting coins")));
}
function Success({ go, amount }) {
    return (React.createElement("div", { className: "h-full flex items-end relative z-10" },
        React.createElement("div", { className: "relative z-10 w-full rounded-t-[2rem] p-6 card-enter", style: { background: "#150f33", border: `1px solid ${BORDER}` } },
            React.createElement("p", { className: "text-white font-bold text-[15px] mb-4 sora" }, "Successful redemption"),
            React.createElement("div", { className: "rounded-2xl p-6 flex flex-col items-center text-center mb-4", style: { background: `linear-gradient(160deg,#4c33b8,#2a1f5c)` } },
                React.createElement("div", { className: "w-16 h-16 rounded-full flex items-center justify-center mb-3 check-pop text-2xl", style: { background: `linear-gradient(145deg,#45f5ea,${MINT_DEEP})` } }, "\u2713"),
                React.createElement("p", { className: "text-white font-bold text-[16px] sora" }, "Cash Reward"),
                React.createElement("p", { className: "text-white font-extrabold text-[22px] mt-2 sora" },
                    "$",
                    amount,
                    " Cashout")),
            React.createElement("p", { className: "text-neutral-400 text-[12px] leading-relaxed mb-4" },
                "Your $",
                amount,
                " reward is on its way \u2014 sent to your linked payment method within 3\u20135 business days."),
            React.createElement("button", { onClick: () => go("rewards"), className: "tap-scale w-full py-3.5 rounded-2xl font-bold text-[13px] sora", style: { background: `linear-gradient(135deg,#45f5ea,${MINT})`, color: "#031715" } }, "DONE"))));
}
function App() {
    const [screen, setScreen] = useState("invite");
    const [amount, setAmount] = useState(100);
    const go = (s) => setScreen(s);
    return (React.createElement(Phone, null,
        screen === "invite" && React.createElement(InviteScreen, { go: go }),
        screen === "rewards" && React.createElement(RewardsScreen, { go: go, pick: setAmount }),
        screen === "claim" && React.createElement(ClaimScreen, { go: go, amount: amount }),
        screen === "processing" && React.createElement(Processing, { go: go }),
        screen === "success" && React.createElement(Success, { go: go, amount: amount })));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App, null));
