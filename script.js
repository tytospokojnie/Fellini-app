document.addEventListener("DOMContentLoaded", function () {
    const offsetX = 128;
    const offsetY = 117;

    const clickableAreas = [
        { id: "head", x: 476 - offsetX, y: 173 - offsetY, radius: 30 },
        { id: "throat", x: 477 - offsetX, y: 370 - offsetY, radius: 45 },
        { id: "g_center", x: 478 - offsetX, y: 490 - offsetY, radius: 45 },
        { id: "sacral", x: 478 - offsetX, y: 632 - offsetY, radius: 45 },
        { id: "ego", x: 556 - offsetX, y: 563 - offsetY, radius: 30 },
        { id: "gate_50_6", x: 150 - offsetX, y: 197 - offsetY, radius: 20 },
        { id: "gate_3_6", x: 150 - offsetX, y: 245 - offsetY, radius: 20 },
        { id: "gate_43_6", x: 150 - offsetX, y: 341 - offsetY, radius: 20 },
        { id: "gate_47_3", x: 150 - offsetX, y: 389 - offsetY, radius: 20 },
        { id: "gate_40_5", x: 150 - offsetX, y: 485 - offsetY, radius: 20 },
        { id: "gate_7_3", x: 150 - offsetX, y: 581 - offsetY, radius: 20 },
        { id: "gate_60_4", x: 807 - offsetX, y: 197 - offsetY, radius: 20 },
        { id: "gate_56_4", x: 807 - offsetX, y: 245 - offsetY, radius: 20 },
        { id: "gate_47_3", x: 807 - offsetX, y: 389 - offsetY, radius: 20 },
        { id: "gate_40_5", x: 807 - offsetX, y: 485 - offsetY, radius: 20 },
        { id: "gate_7_2", x: 807 - offsetX, y: 581 - offsetY, radius: 20 }
    ];

    const imageContainer = document.getElementById("chart-container");
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    const closeBtn = document.getElementById("close-popup");

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    clickableAreas.forEach(area => {
        const hotspot = document.createElement("div");
        hotspot.classList.add("hotspot");
        hotspot.style.left = `${area.x - area.radius}px`;
        hotspot.style.top = `${area.y - area.radius}px`;
        hotspot.style.width = `${area.radius * 2}px`;
        hotspot.style.height = `${area.radius * 2}px`;
        hotspot.dataset.id = area.id;

        hotspot.addEventListener("click", () => openPopup(area.id));
        hotspot.addEventListener("mouseenter", () => hotspot.style.backgroundColor = "rgba(255, 255, 0, 0.5)");
        hotspot.addEventListener("mouseleave", () => hotspot.style.backgroundColor = "transparent");
        
        imageContainer.appendChild(hotspot);
    });

    function openPopup(id) {
        const contentMap = {
            "head": "<strong>Head Centre - Undefined:</strong> Pressure to think and generate ideas. You draw inspiration for your thoughts from the outside world and from the people around you. You love the creative atmosphere and enjoy immersing yourself in it by attending various cultural events. But do not forget that excessive conditioning can confuse your consciousness and give you a headache at the body level. ",
            "throat": "<strong>Throat Centre - Defined:</strong> Manifestation in words or actions. You know when to speak and when to be silent, and you are equally comfortable with both. You have your own, constant and unique way of expressing yourself. If it is for you to speak, you are able to express your position or attitude to an issue in a clear and convincing way. However, be careful not to turn your oratory into a tool for psychological pressure. ",
            "g_center": "<strong> G Centre - Undefined:</strong> Impersonal (transcendent) love and vector of movement through life.  You understand other people's goals and aspirations well, but you cannot say that about yourself. You do not have a clear idea of who you are, because you feel completely different around different people. You take over the style, behaviour, hobbies and even food preferences of the person you are currently close to. So it is very important for you to be in the right place and around the right people for you. You are able to experience life from all angles, changing your direction, and experiencing all the variety of manifestations of love.",
            "sacral": "<strong>Sacral Centre - Defined:</strong> A motor centre. The Generator's creative energy source. You have a powerful source of vital energy inside you. If you act from Response, your enthusiasm and diligence will become an example for others. To avoid depression, do not force yourself to do things that you are not interested in and do not need. Learn to listen to your body and put your personal interests first.",
            "ego": "<strong>Heart Centre (Ego) - Undefined:</strong> A motor centre. Self-esteem, willpower, material interests. You sense other people's willpower, level of self-esteem and ability to achieve material success. You know the real cost of things and the effort involved. But your own self-esteem is unstable, and it should not depend on someone else's opinion. Choose your social circle carefully - you reveal yourself where you are accepted as you are, not for any achievements. Your real value lies in your uniqueness! In order not to create unnecessary stress for yourself, you should not distribute promises to everyone and make unnecessary commitments.",
            "gate_50_6":  "Gate 50.6 (Design Sun): Moral Responsibility, Nuance, Demolishing Preconceptions, Ethical Artistry<br><br> <strong>Quote:</strong><br> All of Fellini's films, as the director noted in a letter about Amarcord to the Italian critic Gian Luigi Rondi, 'have the tendency to demolish preconceived ideas, rhetoric, diagrams, taboos, the abhorrent forms of a certain type of upbringing.' (p.120)<br><br><strong>Explanation:</strong><br Gate 50 represents values, ethics, and the responsibility of maintaining or transforming cultural norms. The sixth line has a revolutionary quality—someone who questions and dismantles limiting beliefs to make space for a new way of thinking.",

                    }
        popupContent.innerHTML = contentMap[id] || "No content available";
        popup.style.display = "block";
        popup.style.position = "absolute";
        popup.style.left = "50px";
        popup.style.top = "100px";
    }
});

