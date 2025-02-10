document.addEventListener("DOMContentLoaded", function () {
    const offsetX = 128;
    const offsetY = 117;

    const imageContainer = document.getElementById("chart-container");
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    const closeBtn = document.getElementById("close-popup");

    const clickableAreas = [
        { id: "head", x: 476, y: 173, radius: 30 },
        { id: "throat", x: 477, y: 370, radius: 45 },
        { id: "g_center", x: 478, y: 490, radius: 45 },
        { id: "sacral", x: 478, y: 632, radius: 45 },
        { id: "ego", x: 556, y: 563, radius: 30 }
    ];

    const planetaryThemes = [
        { id: "design_50_6", gate: "50", x: 150, y: 197 },
        { id: "design_3_6", gate: "3", x: 150, y: 245 },
        { id: "design_43_6", gate: "43", x: 150, y: 341 },
        { id: "design_47_3", gate: "47", x: 150, y: 389 },
        { id: "design_40_5", gate: "40", x: 150, y: 485 },
        { id: "design_7_3", gate: "7", x: 150, y: 581 },
        { id: "personality_60_4", gate: "60", x: 807, y: 197 },
        { id: "personality_56_4", gate: "56", x: 807, y: 245 },
        { id: "personality_47_3", gate: "47", x: 807, y: 389 },
        { id: "personality_40_5", gate: "40", x: 807, y: 485 },
        { id: "personality_7_2", gate: "7", x: 807, y: 581 }
    ];

    const highlightedGates = [
        { id: "50", x: 365, y: 627 },
        { id: "3", x: 480, y: 665 },
        { id: "60", x: 478, y: 711 },
        { id: "56", x: 496, y: 338 },
        { id: "43", x: 478, y: 284 },
        { id: "47", x: 461, y: 238 },
        { id: "40", x: 569, y: 581 },
        { id: "7", x: 461, y: 470 }
    ];

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    function createHotspot(area) {
        const hotspot = document.createElement("div");
        hotspot.classList.add("hotspot");
        hotspot.style.left = `${area.x + offsetX - area.radius}px`;
        hotspot.style.top = `${area.y + offsetY - area.radius}px`;
        hotspot.style.width = `${area.radius * 2}px`;
        hotspot.style.height = `${area.radius * 2}px`;
        hotspot.dataset.id = area.id;
        hotspot.addEventListener("click", () => openPopup(area.id));
        hotspot.addEventListener("mouseenter", () => hotspot.style.backgroundColor = "rgba(255, 255, 0, 0.5)");
        hotspot.addEventListener("mouseleave", () => hotspot.style.backgroundColor = "transparent");
        imageContainer.appendChild(hotspot);
    }

    function createPlanetaryLabel(theme) {
        const label = document.createElement("div");
        label.classList.add("planetary-label");
        label.style.left = `${theme.x + offsetX}px`;
        label.style.top = `${theme.y + offsetY}px`;
        label.dataset.id = theme.id;
        label.innerText = theme.gate;
        
        label.addEventListener("mouseenter", () => highlightGate(theme.gate));
        label.addEventListener("mouseleave", () => removeHighlight(theme.gate));
        label.addEventListener("click", () => openPopup(theme.id));
        
        imageContainer.appendChild(label);
    }

    function highlightGate(gate) {
        const correspondingGate = highlightedGates.find(g => g.id === gate);
        if (correspondingGate) {
            const gateElement = document.createElement("div");
            gateElement.classList.add("highlighted-gate");
            gateElement.style.left = `${correspondingGate.x + offsetX}px`;
            gateElement.style.top = `${correspondingGate.y + offsetY}px`;
            gateElement.dataset.id = `gate_${gate}`;
            imageContainer.appendChild(gateElement);
        }
    }

    function removeHighlight(gate) {
        const gateElement = document.querySelector(`[data-id="gate_${gate}"]`);
        if (gateElement) {
            gateElement.remove();
        }
    }

    function openPopup(id) {
        const contentMap = {
            "head": "<strong>Head Centre - Undefined:</strong> Pressure to think and generate ideas. You draw inspiration for your thoughts from the outside world and from the people around you. You love the creative atmosphere and enjoy immersing yourself in it by attending various cultural events. But do not forget that excessive conditioning can confuse your consciousness and give you a headache at the body level. ",
                        "throat": "<strong>Throat Centre - Defined:</strong> Manifestation in words or actions. You know when to speak and when to be silent, and you are equally comfortable with both. You have your own, constant and unique way of expressing yourself. If it is for you to speak, you are able to express your position or attitude to an issue in a clear and convincing way. However, be careful not to turn your oratory into a tool for psychological pressure. ",
                        "g_center": "<strong> G Centre - Undefined:</strong> Impersonal (transcendent) love and vector of movement through life.  You understand other people's goals and aspirations well, but you cannot say that about yourself. You do not have a clear idea of who you are, because you feel completely different around different people. You take over the style, behaviour, hobbies and even food preferences of the person you are currently close to. So it is very important for you to be in the right place and around the right people for you. You are able to experience life from all angles, changing your direction, and experiencing all the variety of manifestations of love.",
                        "sacral": "<strong>Sacral Centre - Defined:</strong> A motor centre. The Generator's creative energy source. You have a powerful source of vital energy inside you. If you act from Response, your enthusiasm and diligence will become an example for others. To avoid depression, do not force yourself to do things that you are not interested in and do not need. Learn to listen to your body and put your personal interests first.",
                        "ego": "<strong>Heart Centre (Ego) - Undefined:</strong> A motor centre. Self-esteem, willpower, material interests. You sense other people's willpower, level of self-esteem and ability to achieve material success. You know the real cost of things and the effort involved. But your own self-esteem is unstable, and it should not depend on someone else's opinion. Choose your social circle carefully - you reveal yourself where you are accepted as you are, not for any achievements. Your real value lies in your uniqueness! In order not to create unnecessary stress for yourself, you should not distribute promises to everyone and make unnecessary commitments.",
            "gate_50_6": `Gate 50.6 (Design Sun): Moral Responsibility, Nuance, Demolishing Preconceptions, Ethical Artistry<br><br>
                            <strong>Quote:</strong><br>
                            All of Fellini's films, as the director noted in a letter about Amarcord to the Italian critic Gian Luigi Rondi, 'have the tendency to demolish preconceived ideas, rhetoric, diagrams, taboos, the abhorrent forms of a certain type of upbringing.' (p.120)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 50 represents values, ethics, and the responsibility of maintaining or transforming cultural norms. The sixth line has a revolutionary quality—someone who questions and dismantles limiting beliefs to make space for a new way of thinking.`,
                        "gate_3_6": `Gate 3.6 (Design Earth): Experimentation, Trial and Error, New Forms, Creative Struggle<br><br>
                            <strong>Quote:</strong><br>
                            “Movies now have gone past the phase of prose narrative and are coming nearer and nearer to poetry.” (p. 71)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 3 is about ordering chaos, finding new structures, and embracing mutation.`,
                        "gate_43_6": `Gate 43.6 (Design Moon): Radical Vision, Mental Clarity, Inner Knowing, Defying Conventions <br><br>
                            <strong>Quote:</strong><br>
                            “Because Fellini is primarily an artist and not an ideologue, it is not surprising that the few basic beliefs he holds in this regard are rooted ultimately in his aesthetics.” (p. 119)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 43 is about unique insights and breaking away from conventional wisdom.`,
                        "gate_47_3": `Gate 47.3 (Design Venus): Processing Confusion, Finding Meaning in the Abstract<br><br>
                            <strong>Quote:</strong><br>
                            “<em>8½</em> was initially planned as a simple film about a film director unable to make a film.” (p. 180)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 47.3 is about sitting with confusion until insight emerges.`,
                        "gate_40_5": `Gate 40.5 (Design Mars): Willpower, Aloneness & Restoration of the Tribe<br><br>
                            <strong>Quote:</strong><br>
                            “Although Fellini was surrounded by a loyal team of collaborators, he often withdrew from them before starting a new project.” (p. 97)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 40.5 represents the tension between individual willpower and community.`,
                        "gate_7_3": `Gate 7.3 (Design Jupiter): Pragmatic Leadership, Balancing Idealism & Realism<br><br>
                            <strong>Quote:</strong><br>
                            “Fellini managed to maintain creative control over his films while skillfully navigating financial and political constraints. He was an expert at persuading producers to support his vision, often securing funding for unconventional projects that might have otherwise been rejected.” (p. 231)<br><br>
                            <strong>Explanation:</strong><br>
                             Gate 7 in Line 3 is about leadership that balances idealism with practical considerations. Fellini's ability to secure funding and navigate industry constraints while staying true to his artistic vision exemplifies this energy. He was a leader who understood both the dream and the reality, ensuring his ideas could manifest successfully in the world.`,
                        "gate_60_4": `Gate 60.4 (Personality Sun): Acceptance, Limitation as a Catalyst for Innovation<br><br>
                            <strong>Quote:</strong><br>
                            “Fellini discovered that censorship, budget constraints, and technical limitations often fueled his creativity rather than hindered it. He embraced these constraints, using them to develop innovative cinematic techniques, such as the dreamlike artificiality of <em>La Strada</em> and <em>8½</em>.“ (p. 142)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 60.4 is about accepting limitations as a necessary condition for creativity. Rather than resisting external constraints, Fellini used them as a springboard for artistic breakthroughs. His ability to work within—and even thrive under—limitations embodies this gate's energy.`,
                            "gate_56_4": `Gate 56.4 (Personality Earth): Narrative, Inspiration, Audience Connection, Imagination Over Facts<br><br>
                            <strong>Quote:</strong><br>
                           “It would be difficult to find a statement designed to infuriate contemporary film critics more than Fellini's belief that an artist can speak sincerely and directly to a spectator of a film and that the film, considered foremost as a work of art, represents primarily a moment of artistic expression that establishes a mysterious relationship between storyteller (Fellini) and viewer (the public). The visual images narrating the director’s story are ultimately derived from the director's dream life. Rather than ideological pronouncements, Fellini's images typically aim at the communication of emotions or sentiments rather than ideological statements.” (p. 5)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 56 is about the power of storytelling, particularly through personal experience and emotional connection rather than factual exposition. The fourth line emphasizes using past experiences to inspire and move others. This quote illustrates how Fellini saw film as a direct dialogue between artist and audience, aiming to evoke emotions rather than impose ideology—perfectly embodying the essence of the 56th gate.`,
                         "gate_26_3": `Gate 26.3 (Personality Venus): Persuasion, Getting Maximum Reward with Minimum Effort<br><br>
                            <strong>Quote:</strong><br>
                           “Fellini was a consummate showman, not only an artistic genius but also a master magician and even something of a con man. He was a believer in the power of illusion and prestidigitation, an artist who preferred artifice to reality, and a man who believed that dreams were the most honest expression possible for a human being.” (p. 4)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 26 is the energy of persuasion, salesmanship, and the ability to turn raw potential into something marketable. The third line often carries an element of calculated risk, trickery, or cleverness in navigating power structures. This quote captures Fellini's ability to enchant and persuade, both in his films and in how he presented himself—blurring the lines between illusion and reality, making the “con man” archetype a central part of his artistic identity.`,
                        "gate_32_6": `Gate 32.6 (Personality Mars): Fear of Failure, Endurance & Transformation<br><br>
                            <strong>Quote:</strong><br>
                           “Fellini had reached the summit of his career with <em>8½</em>, but his reputation suffered a serious setback with <em>Juliet of the Spirits</em>, a film that was generally seen as a pale imitation of his earlier work, and Fellini's Casanova, which, despite its technical brilliance, was rejected as cold and impersonal. Yet Fellini refused to allow these failures to define him. He reinvented himself and continued making films that challenged both himself and his audience.“ (p. 215)<br><br>
                            <strong>Explanation:</strong><br>
                           Gate 32.6 is about endurance in the face of failure—understanding that transformation comes from persistence. Despite critical setbacks, Fellini’s refusal to let past failures define him shows his alignment with this gate. His ability to re-emerge with bold new projects reflects the energy of resilience and long-term success.`,
                        "gate_7_2": `Gate 7.2 (Personality Jupiter): The Advisor, Influence from Behind the Scenes<br><br>
                            <strong>Quote:</strong><br>
                           “Fellini has frequently compared his set to an ocean voyage like that of Columbus toward the New World: The crew constantly attempts to turn back, but the director-captain must somehow lead them all to a successful landing.“ (p. 3)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 7 in Line 2 represents unseen leadership—guiding others without always being the visible authority figure. Fellini's metaphor of the film set as a voyage, with himself as the captain who must lead a hesitant crew, illustrates this perfectly. He was not a dictator, but his leadership ensured that his artistic vision was realized, influencing his collaborators from behind the scenes.`,
                    };
        popupContent.innerHTML = content;
        popup.style.display = "block";
        popup.style.position = "absolute";
        popup.style.left = "50px";
        popup.style.top = "100px";
    }

    clickableAreas.forEach(createHotspot);
    planetaryThemes.forEach(createPlanetaryLabel);
});

document.addEventListener("DOMContentLoaded", function () {
    const offsetX = 128;
    const offsetY = 117;

    const imageContainer = document.getElementById("chart-container");
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    const closeBtn = document.getElementById("close-popup");

    const clickableAreas = [
        { id: "head", x: 476, y: 173, radius: 30 },
        { id: "throat", x: 477, y: 370, radius: 45 },
        { id: "g_center", x: 478, y: 490, radius: 45 },
        { id: "sacral", x: 478, y: 632, radius: 45 },
        { id: "ego", x: 556, y: 563, radius: 30 }
    ];

    const planetaryThemes = [
        { id: "design_50_6", gate: "50", x: 150, y: 197 },
        { id: "design_3_6", gate: "3", x: 150, y: 245 },
        { id: "design_43_6", gate: "43", x: 150, y: 341 },
        { id: "design_47_3", gate: "47", x: 150, y: 389 },
        { id: "design_40_5", gate: "40", x: 150, y: 485 },
        { id: "design_7_3", gate: "7", x: 150, y: 581 },
        { id: "personality_60_4", gate: "60", x: 807, y: 197 },
        { id: "personality_56_4", gate: "56", x: 807, y: 245 },
        { id: "personality_47_3", gate: "47", x: 807, y: 389 },
        { id: "personality_40_5", gate: "40", x: 807, y: 485 },
        { id: "personality_7_2", gate: "7", x: 807, y: 581 }
    ];

    const highlightedGates = [
        { id: "50", x: 365, y: 627 },
        { id: "3", x: 480, y: 665 },
        { id: "60", x: 478, y: 711 },
        { id: "56", x: 496, y: 338 },
        { id: "43", x: 478, y: 284 },
        { id: "47", x: 461, y: 238 },
        { id: "40", x: 569, y: 581 },
        { id: "7", x: 461, y: 470 }
    ];

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    function createHotspot(area) {
        const hotspot = document.createElement("div");
        hotspot.classList.add("hotspot");
        hotspot.style.left = `${area.x + offsetX - area.radius}px`;
        hotspot.style.top = `${area.y + offsetY - area.radius}px`;
        hotspot.style.width = `${area.radius * 2}px`;
        hotspot.style.height = `${area.radius * 2}px`;
        hotspot.dataset.id = area.id;
        hotspot.addEventListener("click", () => openPopup(area.id));
        hotspot.addEventListener("mouseenter", () => hotspot.style.backgroundColor = "rgba(255, 255, 0, 0.5)");
        hotspot.addEventListener("mouseleave", () => hotspot.style.backgroundColor = "transparent");
        imageContainer.appendChild(hotspot);
    }

    function createPlanetaryLabel(theme) {
        const label = document.createElement("div");
        label.classList.add("planetary-label");
        label.style.left = `${theme.x + offsetX}px`;
        label.style.top = `${theme.y + offsetY}px`;
        label.dataset.id = theme.id;
        label.innerText = theme.gate;
        
        label.addEventListener("mouseenter", () => highlightGate(theme.gate));
        label.addEventListener("mouseleave", () => removeHighlight(theme.gate));
        label.addEventListener("click", () => openPopup(theme.id));
        
        imageContainer.appendChild(label);
    }

    function highlightGate(gate) {
        const correspondingGate = highlightedGates.find(g => g.id === gate);
        if (correspondingGate) {
            const gateElement = document.createElement("div");
            gateElement.classList.add("highlighted-gate");
            gateElement.style.left = `${correspondingGate.x + offsetX}px`;
            gateElement.style.top = `${correspondingGate.y + offsetY}px`;
            gateElement.dataset.id = `gate_${gate}`;
            imageContainer.appendChild(gateElement);
        }
    }

    function removeHighlight(gate) {
        const gateElement = document.querySelector(`[data-id="gate_${gate}"]`);
        if (gateElement) {
            gateElement.remove();
        }
    }

    function openPopup(id) {
        const contentMap = {
            "head": "<strong>Head Centre - Undefined:</strong> Pressure to think and generate ideas. You draw inspiration for your thoughts from the outside world and from the people around you. You love the creative atmosphere and enjoy immersing yourself in it by attending various cultural events. But do not forget that excessive conditioning can confuse your consciousness and give you a headache at the body level. ",
                        "throat": "<strong>Throat Centre - Defined:</strong> Manifestation in words or actions. You know when to speak and when to be silent, and you are equally comfortable with both. You have your own, constant and unique way of expressing yourself. If it is for you to speak, you are able to express your position or attitude to an issue in a clear and convincing way. However, be careful not to turn your oratory into a tool for psychological pressure. ",
                        "g_center": "<strong> G Centre - Undefined:</strong> Impersonal (transcendent) love and vector of movement through life.  You understand other people's goals and aspirations well, but you cannot say that about yourself. You do not have a clear idea of who you are, because you feel completely different around different people. You take over the style, behaviour, hobbies and even food preferences of the person you are currently close to. So it is very important for you to be in the right place and around the right people for you. You are able to experience life from all angles, changing your direction, and experiencing all the variety of manifestations of love.",
                        "sacral": "<strong>Sacral Centre - Defined:</strong> A motor centre. The Generator's creative energy source. You have a powerful source of vital energy inside you. If you act from Response, your enthusiasm and diligence will become an example for others. To avoid depression, do not force yourself to do things that you are not interested in and do not need. Learn to listen to your body and put your personal interests first.",
                        "ego": "<strong>Heart Centre (Ego) - Undefined:</strong> A motor centre. Self-esteem, willpower, material interests. You sense other people's willpower, level of self-esteem and ability to achieve material success. You know the real cost of things and the effort involved. But your own self-esteem is unstable, and it should not depend on someone else's opinion. Choose your social circle carefully - you reveal yourself where you are accepted as you are, not for any achievements. Your real value lies in your uniqueness! In order not to create unnecessary stress for yourself, you should not distribute promises to everyone and make unnecessary commitments.",
            "gate_50_6": `Gate 50.6 (Design Sun): Moral Responsibility, Nuance, Demolishing Preconceptions, Ethical Artistry<br><br>
                            <strong>Quote:</strong><br>
                            All of Fellini's films, as the director noted in a letter about Amarcord to the Italian critic Gian Luigi Rondi, 'have the tendency to demolish preconceived ideas, rhetoric, diagrams, taboos, the abhorrent forms of a certain type of upbringing.' (p.120)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 50 represents values, ethics, and the responsibility of maintaining or transforming cultural norms. The sixth line has a revolutionary quality—someone who questions and dismantles limiting beliefs to make space for a new way of thinking.`,
                        "gate_3_6": `Gate 3.6 (Design Earth): Experimentation, Trial and Error, New Forms, Creative Struggle<br><br>
                            <strong>Quote:</strong><br>
                            “Movies now have gone past the phase of prose narrative and are coming nearer and nearer to poetry.” (p. 71)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 3 is about ordering chaos, finding new structures, and embracing mutation.`,
                        "gate_43_6": `Gate 43.6 (Design Moon): Radical Vision, Mental Clarity, Inner Knowing, Defying Conventions <br><br>
                            <strong>Quote:</strong><br>
                            “Because Fellini is primarily an artist and not an ideologue, it is not surprising that the few basic beliefs he holds in this regard are rooted ultimately in his aesthetics.” (p. 119)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 43 is about unique insights and breaking away from conventional wisdom.`,
                        "gate_47_3": `Gate 47.3 (Design Venus): Processing Confusion, Finding Meaning in the Abstract<br><br>
                            <strong>Quote:</strong><br>
                            “<em>8½</em> was initially planned as a simple film about a film director unable to make a film.” (p. 180)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 47.3 is about sitting with confusion until insight emerges.`,
                        "gate_40_5": `Gate 40.5 (Design Mars): Willpower, Aloneness & Restoration of the Tribe<br><br>
                            <strong>Quote:</strong><br>
                            “Although Fellini was surrounded by a loyal team of collaborators, he often withdrew from them before starting a new project.” (p. 97)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 40.5 represents the tension between individual willpower and community.`,
                        "gate_7_3": `Gate 7.3 (Design Jupiter): Pragmatic Leadership, Balancing Idealism & Realism<br><br>
                            <strong>Quote:</strong><br>
                            “Fellini managed to maintain creative control over his films while skillfully navigating financial and political constraints. He was an expert at persuading producers to support his vision, often securing funding for unconventional projects that might have otherwise been rejected.” (p. 231)<br><br>
                            <strong>Explanation:</strong><br>
                             Gate 7 in Line 3 is about leadership that balances idealism with practical considerations. Fellini's ability to secure funding and navigate industry constraints while staying true to his artistic vision exemplifies this energy. He was a leader who understood both the dream and the reality, ensuring his ideas could manifest successfully in the world.`,
                        "gate_60_4": `Gate 60.4 (Personality Sun): Acceptance, Limitation as a Catalyst for Innovation<br><br>
                            <strong>Quote:</strong><br>
                            “Fellini discovered that censorship, budget constraints, and technical limitations often fueled his creativity rather than hindered it. He embraced these constraints, using them to develop innovative cinematic techniques, such as the dreamlike artificiality of <em>La Strada</em> and <em>8½</em>.“ (p. 142)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 60.4 is about accepting limitations as a necessary condition for creativity. Rather than resisting external constraints, Fellini used them as a springboard for artistic breakthroughs. His ability to work within—and even thrive under—limitations embodies this gate's energy.`,
                            "gate_56_4": `Gate 56.4 (Personality Earth): Narrative, Inspiration, Audience Connection, Imagination Over Facts<br><br>
                            <strong>Quote:</strong><br>
                           “It would be difficult to find a statement designed to infuriate contemporary film critics more than Fellini's belief that an artist can speak sincerely and directly to a spectator of a film and that the film, considered foremost as a work of art, represents primarily a moment of artistic expression that establishes a mysterious relationship between storyteller (Fellini) and viewer (the public). The visual images narrating the director’s story are ultimately derived from the director's dream life. Rather than ideological pronouncements, Fellini's images typically aim at the communication of emotions or sentiments rather than ideological statements.” (p. 5)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 56 is about the power of storytelling, particularly through personal experience and emotional connection rather than factual exposition. The fourth line emphasizes using past experiences to inspire and move others. This quote illustrates how Fellini saw film as a direct dialogue between artist and audience, aiming to evoke emotions rather than impose ideology—perfectly embodying the essence of the 56th gate.`,
                         "gate_26_3": `Gate 26.3 (Personality Venus): Persuasion, Getting Maximum Reward with Minimum Effort<br><br>
                            <strong>Quote:</strong><br>
                           “Fellini was a consummate showman, not only an artistic genius but also a master magician and even something of a con man. He was a believer in the power of illusion and prestidigitation, an artist who preferred artifice to reality, and a man who believed that dreams were the most honest expression possible for a human being.” (p. 4)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 26 is the energy of persuasion, salesmanship, and the ability to turn raw potential into something marketable. The third line often carries an element of calculated risk, trickery, or cleverness in navigating power structures. This quote captures Fellini's ability to enchant and persuade, both in his films and in how he presented himself—blurring the lines between illusion and reality, making the “con man” archetype a central part of his artistic identity.`,
                        "gate_32_6": `Gate 32.6 (Personality Mars): Fear of Failure, Endurance & Transformation<br><br>
                            <strong>Quote:</strong><br>
                           “Fellini had reached the summit of his career with <em>8½</em>, but his reputation suffered a serious setback with <em>Juliet of the Spirits</em>, a film that was generally seen as a pale imitation of his earlier work, and Fellini's Casanova, which, despite its technical brilliance, was rejected as cold and impersonal. Yet Fellini refused to allow these failures to define him. He reinvented himself and continued making films that challenged both himself and his audience.“ (p. 215)<br><br>
                            <strong>Explanation:</strong><br>
                           Gate 32.6 is about endurance in the face of failure—understanding that transformation comes from persistence. Despite critical setbacks, Fellini’s refusal to let past failures define him shows his alignment with this gate. His ability to re-emerge with bold new projects reflects the energy of resilience and long-term success.`,
                        "gate_7_2": `Gate 7.2 (Personality Jupiter): The Advisor, Influence from Behind the Scenes<br><br>
                            <strong>Quote:</strong><br>
                           “Fellini has frequently compared his set to an ocean voyage like that of Columbus toward the New World: The crew constantly attempts to turn back, but the director-captain must somehow lead them all to a successful landing.“ (p. 3)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 7 in Line 2 represents unseen leadership—guiding others without always being the visible authority figure. Fellini's metaphor of the film set as a voyage, with himself as the captain who must lead a hesitant crew, illustrates this perfectly. He was not a dictator, but his leadership ensured that his artistic vision was realized, influencing his collaborators from behind the scenes.`,
                    };
        popupContent.innerHTML = content;
        popup.style.display = "block";
        popup.style.position = "absolute";
        popup.style.left = "50px";
        popup.style.top = "100px";
    }

    clickableAreas.forEach(createHotspot);
    planetaryThemes.forEach(createPlanetaryLabel);
});

