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
        { id: "gate_43_6", x: 150 - offsetX, y: 389 - offsetY, radius: 20 },
        { id: "gate_47_3", x: 150 - offsetX, y: 485 - offsetY, radius: 20 },
        { id: "gate_40_5", x: 150 - offsetX, y: 533 - offsetY, radius: 20 },
        { id: "gate_7_3", x: 150 - offsetX, y: 581 - offsetY, radius: 20 },
        { id: "gate_60_4", x: 807 - offsetX, y: 197 - offsetY, radius: 20 },
        { id: "gate_56_4", x: 807 - offsetX, y: 245 - offsetY, radius: 20 },
        { id: "gate_26_3", x: 807 - offsetX, y: 485 - offsetY, radius: 20 },
        { id: "gate_32_6", x: 807 - offsetX, y: 533 - offsetY, radius: 20 },
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
                        "head": `<strong>Head Centre - Undefined: </strong> Pressure to think and generate ideas. He draws inspiration for his thoughts from the outside world and from the people around him. He loves the creative atmosphere and enjoys immersing himself in it by attending various cultural events. He shan't forget that excessive conditioning can confuse his consciousness and give him a headache at the body level. <br>
                            <br><a href="https://www.humdes.com/en/kb/centers/head/" target="_blank">Read more here</a>`,
                        "throat": `<strong>Throat Centre - Defined:</strong> Manifestation in words or actions. He knows when to speak and when to be silent, and he is equally comfortable with both. He has his own, constant and unique way of expressing himself. If it is for him to speak, he is able to express his position or attitude to an issue in a clear and convincing way. However, he should be careful not to turn his oratory into a tool for psychological pressure. <br>
                            <br><a href="https://www.humdes.com/en/kb/centers/throat/" target="_blank">Read more here</a>`,
                        "g_center": `<strong> G Centre - Undefined:</strong> Impersonal (transcendent) love and vector of movement through life.  He understands other people's goals and aspirations well, but he cannot say that about himself. He doesn't have a clear idea of who he is, because he feels completely different around different people. He takes over the style, behaviour, hobbies and even food preferences of the person he is currently close to. So it is very important for him to be in the right place and around the right people for you. He is able to experience life from all angles, changing his direction, and experiencing all the variety of manifestations of love. <br>
                            <br><a href="https://www.humdes.com/en/kb/centers/g/" target="_blank">Read more here</a>`,
                        "sacral": `<strong>Sacral Centre - Defined:</strong> A motor centre. The Generator's creative energy source. He has a powerful source of vital energy inside. If he acts from Response, his enthusiasm and diligence will become an example for others. To avoid depression, he shouldn't force himself to do things that he is not interested in and does not need. He should learn to listen to his body and put his personal interests first.<br>
                            <br><a href="https://www.humdes.com/en/kb/centers/sacral/" target="_blank">Read more here</a>`,
                        "ego": `<strong>Heart Centre (Ego) - Undefined:</strong> A motor centre. Self-esteem, willpower, material interests. He senses other people's willpower, level of self-esteem and ability to achieve material success. He knows the real cost of things and the effort involved. But his own self-esteem is unstable, and it should not depend on someone else's opinion. He should choose his social circle carefully - he reveals himself where he is accepted as he is, not for any achievements. Real value lies in one's uniqueness! In order not to create unnecessary stress for himself, he should not distribute promises to everyone and make unnecessary commitments.<br>
                            <br><a href="https://www.humdes.com/en/kb/centers/heart/" target="_blank">Read more here</a>`,
                        "gate_50_6": `<strong>Gate 50.6 (Design Sun): </strong> Moral Responsibility, Nuance, Demolishing Preconceptions, Ethical Artistry<br><br>
                            <strong>Quote:</strong><br>
                            All of Fellini's films, as the director noted in a letter about <em>Amarcord</em> to the Italian critic Gian Luigi Rondi, 'have the tendency to demolish preconceived ideas, rhetoric, diagrams, taboos, the abhorrent forms of a certain type of upbringing.' (p.120)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 50 represents values, ethics, and the responsibility of maintaining or transforming cultural norms. The sixth line has a revolutionary quality—someone who questions and dismantles limiting beliefs to make space for a new way of thinking.
                           <br> <br><a href="https://www.humdes.com/en/kb/gates/50/" target="_blank">Read more here</a>`,
                        "gate_3_6": `<strong>Gate 3.6 (Design Earth): </strong> Experimentation, Trial and Error, New Forms, Creative Struggle<br><br>
                            <strong>Quote:</strong><br>
                            “Movies now have gone past the phase of prose narrative and are coming nearer and nearer to poetry.” (p. 71)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 3 is about ordering chaos, finding new structures, and embracing mutation.
                             <br><br><a href="https://www.humdes.com/en/kb/gates/3/" target="_blank">Read more here</a>`,
                        "gate_43_6": `<strong>Gate 43.6 (Design Moon):</strong> Radical Vision, Mental Clarity, Inner Knowing, Defying Conventions <br><br>
                            <strong>Quote:</strong><br>
                            “Because Fellini is primarily an artist and not an ideologue, it is not surprising that the few basic beliefs he holds in this regard are rooted ultimately in his aesthetics.” (p. 119)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 43 is about unique insights and breaking away from conventional wisdom.
                             <br><br><a href="https://www.humdes.com/en/kb/gates/43/" target="_blank">Read more here</a>`,
                        "gate_47_3": `<strong>Gate 47.3 (Design Venus):</strong> Processing Confusion, Finding Meaning in the Abstract<br><br>
                            <strong>Quote:</strong><br>
                            “<em>8½</em> was initially planned as a simple film about a film director unable to make a film.” (p. 180)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 47.3 is about sitting with confusion until insight emerges.
                             <br><br><a href="https://www.humdes.com/en/kb/gates/47/" target="_blank">Read more here</a>`,
                        "gate_40_5": `<strong>Gate 40.5 (Design Mars):</strong> Willpower, Aloneness & Restoration of the Tribe<br><br>
                            <strong>Quote:</strong><br>
                            “Although Fellini was surrounded by a loyal team of collaborators, he often withdrew from them before starting a new project.” (p. 97)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 40.5 represents the tension between individual willpower and community.
                             <br><br><a href="https://www.humdes.com/en/kb/gates/40/" target="_blank">Read more here</a>`,
                        "gate_7_3": `<strong>Gate 7.3 (Design Jupiter):</strong> Pragmatic Leadership, Balancing Idealism & Realism<br><br>
                            <strong>Quote:</strong><br>
                            “Fellini managed to maintain creative control over his films while skillfully navigating financial and political constraints. He was an expert at persuading producers to support his vision, often securing funding for unconventional projects that might have otherwise been rejected.” (p. 231)<br><br>
                            <strong>Explanation:</strong><br>
                             Gate 7 in Line 3 is about leadership that balances idealism with practical considerations. Fellini's ability to secure funding and navigate industry constraints while staying true to his artistic vision exemplifies this energy. He was a leader who understood both the dream and the reality, ensuring his ideas could manifest successfully in the world.
                              <br><br><a href="https://www.humdes.com/en/kb/gates/7/" target="_blank">Read more here</a>`,
                        "gate_60_4": `<strong>Gate 60.4 (Personality Sun):</strong> Acceptance, Limitation as a Catalyst for Innovation<br><br>
                            <strong>Quote:</strong><br>
                            “Fellini discovered that censorship, budget constraints, and technical limitations often fueled his creativity rather than hindered it. He embraced these constraints, using them to develop innovative cinematic techniques, such as the dreamlike artificiality of <em>La Strada</em> and <em>8½</em>.“ (p. 142)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 60.4 is about accepting limitations as a necessary condition for creativity. Rather than resisting external constraints, Fellini used them as a springboard for artistic breakthroughs. His ability to work within—and even thrive under—limitations embodies this gate's energy.
                             <br><br><a href="https://www.humdes.com/en/kb/gates/60/" target="_blank">Read more here</a>`,
                        "gate_56_4": `<strong>Gate 56.4 (Personality Earth):</strong> Narrative, Inspiration, Audience Connection, Imagination Over Facts<br><br>
                            <strong>Quote:</strong><br>
                           “It would be difficult to find a statement designed to infuriate contemporary film critics more than Fellini's belief that an artist can speak sincerely and directly to a spectator of a film and that the film, considered foremost as a work of art, represents primarily a moment of artistic expression that establishes a mysterious relationship between storyteller (Fellini) and viewer (the public). The visual images narrating the director’s story are ultimately derived from the director's dream life. Rather than ideological pronouncements, Fellini's images typically aim at the communication of emotions or sentiments rather than ideological statements.” (p. 5)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 56 is about the power of storytelling, particularly through personal experience and emotional connection rather than factual exposition. The fourth line emphasizes using past experiences to inspire and move others. This quote illustrates how Fellini saw film as a direct dialogue between artist and audience, aiming to evoke emotions rather than impose ideology—perfectly embodying the essence of the 56th gate.
                             <br><br><a href="https://www.humdes.com/en/kb/gates/56/" target="_blank">Read more here</a>`,
                         "gate_26_3": `<strong>Gate 26.3 (Personality Venus):</strong> Persuasion, Getting Maximum Reward with Minimum Effort<br><br>
                            <strong>Quote:</strong><br>
                           “Fellini was a consummate showman, not only an artistic genius but also a master magician and even something of a con man. He was a believer in the power of illusion and prestidigitation, an artist who preferred artifice to reality, and a man who believed that dreams were the most honest expression possible for a human being.” (p. 4)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 26 is the energy of persuasion, salesmanship, and the ability to turn raw potential into something marketable. The third line often carries an element of calculated risk, trickery, or cleverness in navigating power structures. This quote captures Fellini's ability to enchant and persuade, both in his films and in how he presented himself—blurring the lines between illusion and reality, making the “con man” archetype a central part of his artistic identity.
                             <br><br><a href="https://www.humdes.com/en/kb/gates/26/" target="_blank">Read more here</a>`,
                        "gate_32_6": `<strong>Gate 32.6 (Personality Mars):</strong> Fear of Failure, Endurance & Transformation<br><br>
                            <strong>Quote:</strong><br>
                           “Fellini had reached the summit of his career with <em>8½</em>, but his reputation suffered a serious setback with <em>Juliet of the Spirits</em>, a film that was generally seen as a pale imitation of his earlier work, and Fellini's Casanova, which, despite its technical brilliance, was rejected as cold and impersonal. Yet Fellini refused to allow these failures to define him. He reinvented himself and continued making films that challenged both himself and his audience.“ (p. 215)<br><br>
                            <strong>Explanation:</strong><br>
                           Gate 32.6 is about endurance in the face of failure—understanding that transformation comes from persistence. Despite critical setbacks, Fellini’s refusal to let past failures define him shows his alignment with this gate. His ability to re-emerge with bold new projects reflects the energy of resilience and long-term success.
                            <br><br><a href="https://www.humdes.com/en/kb/gates/32/" target="_blank">Read more here</a>`,
                        "gate_7_2": `<strong>Gate 7.2 (Personality Jupiter):</strong> The Advisor, Influence from Behind the Scenes<br><br>
                            <strong>Quote:</strong><br>
                           “Fellini has frequently compared his set to an ocean voyage like that of Columbus toward the New World: The crew constantly attempts to turn back, but the director-captain must somehow lead them all to a successful landing.“ (p. 3)<br><br>
                            <strong>Explanation:</strong><br>
                            Gate 7 in Line 2 represents unseen leadership—guiding others without always being the visible authority figure. Fellini's metaphor of the film set as a voyage, with himself as the captain who must lead a hesitant crew, illustrates this perfectly. He was not a dictator, but his leadership ensured that his artistic vision was realized, influencing his collaborators from behind the scenes.
                             <br><br><a href="https://www.humdes.com/en/kb/gates/7/" target="_blank">Read more here</a>`
                    }
        popupContent.innerHTML = contentMap[id] || "No content available";
        popup.style.display = "block";

  
    }
});

