document.addEventListener("DOMContentLoaded", function () {
    const clickableAreas = [
        { id: "head", x: 340, y: 50, radius: 50 },
        { id: "throat", x: 340, y: 220, radius: 60 },
        { id: "g_center", x: 340, y: 380, radius: 70 },
        { id: "sacral", x: 340, y: 540, radius: 80 },
        { id: "ego", x: 430, y: 420, radius: 50 },
        { id: "gate_50_6", x: 250, y: 500, radius: 20 },
        { id: "gate_3_6", x: 340, y: 590, radius: 20 },
        { id: "gate_43_6", x: 280, y: 200, radius: 20 },
        { id: "gate_47_3", x: 280, y: 150, radius: 20 },
        { id: "gate_40_5", x: 470, y: 410, radius: 20 },
        { id: "gate_7_3", x: 340, y: 320, radius: 20 },
        { id: "gate_60_4", x: 340, y: 90, radius: 20 },
        { id: "gate_56_4", x: 340, y: 260, radius: 20 },
        { id: "gate_26_3", x: 450, y: 380, radius: 20 },
        { id: "gate_32_6", x: 460, y: 500, radius: 20 },
        { id: "gate_7_2", x: 340, y: 310, radius: 20 }
    ];

    const imageContainer = document.getElementById("chart-container");

    clickableAreas.forEach(area => {
        const hotspot = document.createElement("div");
        hotspot.classList.add("hotspot");
        hotspot.style.left = `${area.x - area.radius}px`;
        hotspot.style.top = `${area.y - area.radius}px`;
        hotspot.style.width = `${area.radius * 2}px`;
        hotspot.style.height = `${area.radius * 2}px`;
        hotspot.dataset.id = area.id;

        hotspot.addEventListener("click", () => openPopup(area.id));
        imageContainer.appendChild(hotspot);
    });

    function openPopup(id) {
        const popup = document.getElementById("popup");
        const popupContent = document.getElementById("popup-content");
        popup.style.width = "400px";
        popup.style.height = "250px";
        popup.style.position = "absolute";
        popup.style.top = "100px";
        popup.style.left = "50%";
        popup.style.transform = "translateX(-50%)";
        popup.style.backgroundColor = "white";
        popup.style.padding = "15px";
        popup.style.border = "2px solid black";
        popup.style.boxShadow = "5px 5px 10px rgba(0,0,0,0.2)";
        popup.style.display = "block";

        const contentMap = {
            “head”: `Head Centre <br><br>
                <strong>Pressure to think. The source of your inspiration and thoughts. </strong><br>
              <br><br>
You draw inspiration for your thoughts from the outside world and from the people around you. You love the creative atmosphere and enjoy immersing yourself in it by attending various cultural events. But do not forget that excessive conditioning can confuse your consciousness and give you a headache at the body level. ‘
                

“throat”: `Throat Centre <br><br>
                <strong>Manifestation of the inner self in words or actions. </strong><br>
               You know when to speak and when to be silent, and you are equally comfortable with both. You have your own, constant and unique way of expressing yourself. If it is for you to speak, you are able to express your position or attitude to an issue in a clear and convincing way. However, be careful not to turn your oratory into a tool for psychological pressure’

“g_center”: `G Centre  <br><br>
                <strong>Impersonal (transcendent) love and vector of movement through life.</strong><br>
              You understand other people's goals and aspirations well, but you cannot say that about yourself. You do not have a clear idea of who you are, because you feel completely different around different people. You take over the style, behaviour, hobbies and even food preferences of the person you are currently close to. So it is very important for you to be in the right place and around the right people for you. You are able to experience life from all angles, changing your direction, and experiencing all the variety of manifestations of love.’

“sacral”: `Sacral Centre <br><br>
                <strong>A motor centre. The Generators’ creative energy source.</strong><br>
                 You have a powerful source of vital energy inside you. If you act from Response, your enthusiasm and diligence will become an example for others. To avoid depression, do not force yourself to do things that you are not interested in and do not need. Learn to listen to your body and put your personal interests first.’

“ego”: `Heart Centre (Ego) <br><br>
                <strong>A motor centre. Self-esteem, willpower, material interests. </strong><br>
               You sense other people's willpower, level of self-esteem and ability to achieve material success. You know the real cost of things and the effort involved. But your own self-esteem is unstable, and it should not depend on someone else's opinion. Choose your social circle carefully - you reveal yourself where you are accepted as you are, not for any achievements. Your real value lies in your uniqueness! In order not to create unnecessary stress for yourself, you should not distribute promises to everyone and make unnecessary commitments.’

"gate_50_6": `Gate 50.6 (Design Sun) – Moral Responsibility, Nuance, Demolishing Preconceptions, Ethical Artistry<br><br>
                <strong>Quote:</strong><br>
                All of Fellini’s films, as the director noted in a letter about Amarcord to the Italian critic Gian Luigi Rondi, 'have the tendency to demolish preconceived ideas, rhetoric, diagrams, taboos, the abhorrent forms of a certain type of upbringing.’" (p.120))<br><br>
                <strong>Explanation:</strong><br>
                Gate 50 represents values, ethics, and the responsibility of maintaining or transforming cultural norms. The sixth line has a revolutionary quality—someone who questions and dismantles limiting beliefs to make space for a new way of thinking. This quote directly illustrates how Fellini used cinema to challenge societal conditioning, break taboos, and deconstruct rigid ideological frameworks, embodying the transformative potential of Gate 50.’

"gate_3_6": `Gate 3.6 (Design Earth) – Experimentation, Trial and Error, New Forms, Creative Struggle
<br><br>
                <strong>Quote:</strong><br>
              “ Movies now have gone past the phase of prose narrative and are coming nearer and nearer to poetry. I am trying to free my work from certain constructions — a story with a beginning, a development, an ending. It should be more like a poem with meter and cadence.” (p. 71)<br><br>
                <strong>Explanation:</strong><br>
                Gate 3 is about ordering chaos, finding new structures, and embracing mutation. The sixth line often points to someone who experiments, makes breakthroughs, and ultimately revolutionizes an art form or field. Fellini’s desire to break away from traditional storytelling in favor of a freer, more poetic form reflects the essence of Gate 3.6—innovation through disruption.’

"gate_43_6": `Gate 43.6 (Design Moon) – Radical Vision, Mental Clarity, Inner Knowing, Defying Conventions <br><br>
                <strong>Quote:</strong><br>
               “Because Fellini is primarily an artist and not an ideologue, it is not surprising that the few basic beliefs he holds in this regard are rooted ultimately in his aesthetics. As we have seen from our discussion of 8 1/2, Fellini locates the focal point of creativity in the individual and his fantasy life. Consequently, anything that deforms, obstructs, represses, or distorts this creativity or the growth of a free consciousness within the individuals making up society is to be opposed.” (p. 119) <br><br>
                <strong>Explanation:</strong><br>
                Gate 43 is about unique insights and breaking away from conventional wisdom. The sixth line is the visionary who brings new perspectives that challenge collective thinking. This quote highlights Fellini’s deep commitment to personal creative freedom, rejecting ideological conformity and emphasizing the importance of individuality—precisely the kind of radical independence that Gate 43.6 embodies.’

"gate_47_3": `Gate 47.3 (Design Venus) – Processing Confusion, Finding Meaning in the Abstract <br><br>
                <strong>Quote:</strong><br>
               “<em>8½</em>was initially planned as a simple film about a film director unable to make a film, but as Fellini’s own doubts and uncertainties increased, the work transformed into a labyrinthine exploration of memory, fantasy, and self-doubt. Rather than forcing a logical structure, Fellini allowed the film to emerge organically, embracing the confusion at its core.” (p. 180)<br><br>
                <strong>Explanation:</strong><br>
               Gate 47.3 is about sitting with confusion until insight emerges. Fellini’s creative process for <em> 8½</em>—starting from uncertainty and allowing the film’s structure to evolve intuitively—embodies this energy. His genius lay in not resisting the confusion but rather embracing it as part of the journey toward meaning.’

"gate_40_5": `Gate 40.5 (Design Mars) – Willpower, Aloneness & Restoration of the Tribe <br><br>
                <strong>Quote:</strong><br>
                “Although Fellini was surrounded by a loyal team of collaborators, he often withdrew from them before starting a new project. He required solitude, cutting off social interactions, to find his creative vision. Only once he had internally resolved his ideas did he return to his collaborators to bring the film to life.” (p. 97)<br><br>
                <strong>Explanation:</strong><br>
               Gate 40.5 represents the tension between individual willpower and community. Fellini’s need to retreat into isolation before re-engaging with his creative “tribe” mirrors this dynamic. His films often featured lone, willful protagonists, reflecting both his own nature and the archetypal journey of Gate 40.’

"gate_7_3": `Gate 7.3 (Design Jupiter) – Pragmatic Leadership, Balancing Idealism & Realism<br><br>
                <strong>Quote:</strong><br>
                “Fellini managed to maintain creative control over his films while skillfully navigating financial and political constraints. He was an expert at persuading producers to support his vision, often securing funding for unconventional projects that might have otherwise been rejected.” (p. 231)<br><br>
                <strong>Explanation:</strong><br>
               Gate 7 in Line 3 is about leadership that balances idealism with practical considerations. Fellini’s ability to secure funding and navigate industry constraints while staying true to his artistic vision exemplifies this energy. He was a leader who understood both the dream and the reality, ensuring his ideas could manifest successfully in the world.’

"gate_60_4": `Gate 60.4 (Personality Sun) – Acceptance, Limitation as a Catalyst for Innovation<br><br>
                <strong>Quote:</strong><br>
                "Fellini discovered that censorship, budget constraints, and technical limitations often fueled his creativity rather than hindered it. He embraced these constraints, using them to develop innovative cinematic techniques, such as the dreamlike artificiality of <em>La Strada</em> and <em>8½</em>." (p. 142)<br><br>
                <strong>Explanation:</strong><br>
                Gate 60.4 is about accepting limitations as a necessary condition for creativity. Rather than resisting external constraints, Fellini used them as a springboard for artistic breakthroughs. His ability to work within—and even thrive under—limitations embodies this gate’s energy.`

"gate_56_4”: `Gate 56.4 (Personality Earth) – Narrative, Inspiration, Audience Connection, Imagination Over Facts<br><br>
                <strong>Quote:</strong><br>
               “ It would be difficult to find a statement designed to infuriate contemporary film critics more than Fellini’s belief that an artist can speak sincerely and directly to a spectator of a film and that the film, considered foremost as a work of art, represents primarily a moment of artistic expression that establishes a mysterious relationship between storyteller (Fellini) and viewer (the public). The visual images narrating the director’s story are ultimately derived from the director’s dream life. Rather than ideological pronouncements, Fellini’s images typically aim at the communication of emotions or sentiments rather than ideological statements.” (p. 5)<br><br>
                <strong>Explanation:</strong><br>
                Gate 56 is about the power of storytelling, particularly through personal experience and emotional connection rather than factual exposition. The fourth line emphasizes using past experiences to inspire and move others. This quote illustrates how Fellini saw film as a direct dialogue between artist and audience, aiming to evoke emotions rather than impose ideology—perfectly embodying the essence of the 56th gate.
‘

"gate_26_3": `Gate 26.3 (Personality Venus) – Persuasion, Getting Maximum Reward with Minimum Effort<br><br>
                <strong>Quote:</strong><br>
               “ Fellini was a consummate showman, not only an artistic genius but also a master magician and even something of a con man. He was a believer in the power of illusion and prestidigitation, an artist who preferred artifice to reality, and a man who believed that dreams were the most honest expression possible for a human being.” (p. 4)<br><br>
                <strong>Explanation:</strong><br>
              Gate 26 is the energy of persuasion, salesmanship, and the ability to turn raw potential into something marketable. The third line often carries an element of calculated risk, trickery, or cleverness in navigating power structures. This quote captures Fellini’s ability to enchant and persuade, both in his films and in how he presented himself—blurring the lines between illusion and reality, making the “con man” archetype a central part of his artistic identity.’

"gate_32_6": `Gate 32.6 (Personality Mars) – Fear of Failure, Endurance & Transformation<br><br>
                <strong>Quote:</strong><br>
               "Fellini had reached the summit of his career with <em>8½</em>, but his reputation suffered a serious setback with Juliet of the Spirits, a film that was generally seen as a pale imitation of his earlier work, and Fellini’s Casanova, which, despite its technical brilliance, was rejected as cold and impersonal. Yet Fellini refused to allow these failures to define him. He reinvented himself and continued making films that challenged both himself and his audience." (p. 215)<br><br>
                <strong>Explanation:</strong><br>
               Gate 32.6 is about endurance in the face of failure—understanding that transformation comes from persistence. Despite critical setbacks, Fellini’s refusal to let past failures define him shows his alignment with this gate. His ability to re-emerge with bold new projects reflects the energy of resilience and long-term success.’

"gate_7_2": `Gate 7.2 (Personality Jupiter) – The Advisor, Influence from Behind the Scenes<br><br>
                <strong>Quote:</strong><br>
               "Fellini has frequently compared his set to an ocean voyage like that of Columbus toward the New World: The crew constantly attempts to turn back, but the director-captain must somehow lead them all to a successful landing." (p. 3)’<br><br>
                <strong>Explanation:</strong><br>
                Gate 7 in Line 2 represents unseen leadership—guiding others without always being the visible authority figure. Fellini’s metaphor of the film set as a voyage, with himself as the captain who must lead a hesitant crew, illustrates this perfectly. He was not a dictator, but his leadership ensured that his artistic vision was realized, influencing his collaborators from behind the scenes.’
        };

        popupContent.innerHTML = contentMap[id] || "No content available";
        
        const closeBtn = document.createElement("button");
        closeBtn.innerHTML = "X";
        closeBtn.style.position = "absolute";
        closeBtn.style.top = "5px";
        closeBtn.style.right = "5px";
        closeBtn.style.cursor = "pointer";
        closeBtn.onclick = function () { popup.style.display = "none"; };
        popup.appendChild(closeBtn);
    }

    document.getElementById("close-popup").addEventListener("click", () => {
        document.getElementById("popup").style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const clickableAreas = [
        { id: "head", x: 340, y: 50, radius: 50 },
        { id: "throat", x: 340, y: 220, radius: 60 },
        { id: "g_center", x: 340, y: 380, radius: 70 },
        { id: "sacral", x: 340, y: 540, radius: 80 },
        { id: "ego", x: 430, y: 420, radius: 50 },
        { id: "gate_50_6", x: 250, y: 500, radius: 20 },
        { id: "gate_3_6", x: 340, y: 590, radius: 20 },
        { id: "gate_43_6", x: 280, y: 200, radius: 20 },
        { id: "gate_47_3", x: 280, y: 150, radius: 20 },
        { id: "gate_40_5", x: 470, y: 410, radius: 20 },
        { id: "gate_7_3", x: 340, y: 320, radius: 20 },
        { id: "gate_60_4", x: 340, y: 90, radius: 20 },
        { id: "gate_56_4", x: 340, y: 260, radius: 20 },
        { id: "gate_26_3", x: 450, y: 380, radius: 20 },
        { id: "gate_32_6", x: 460, y: 500, radius: 20 },
        { id: "gate_7_2", x: 340, y: 310, radius: 20 }
    ];

    const imageContainer = document.getElementById("chart-container");

    clickableAreas.forEach(area => {
        const hotspot = document.createElement("div");
        hotspot.classList.add("hotspot");
        hotspot.style.left = `${area.x - area.radius}px`;
        hotspot.style.top = `${area.y - area.radius}px`;
        hotspot.style.width = `${area.radius * 2}px`;
        hotspot.style.height = `${area.radius * 2}px`;
        hotspot.dataset.id = area.id;

        hotspot.addEventListener("click", () => openPopup(area.id));
        imageContainer.appendChild(hotspot);
    });

    function openPopup(id) {
        const popup = document.getElementById("popup");
        const popupContent = document.getElementById("popup-content");
        popup.style.width = "400px";
        popup.style.height = "250px";
        popup.style.position = "absolute";
        popup.style.top = "100px";
        popup.style.left = "50%";
        popup.style.transform = "translateX(-50%)";
        popup.style.backgroundColor = "white";
        popup.style.padding = "15px";
        popup.style.border = "2px solid black";
        popup.style.boxShadow = "5px 5px 10px rgba(0,0,0,0.2)";
        popup.style.display = "block";

        const contentMap = {
            "head": "Head Centre <br><br><strong>Pressure to think. The source of your inspiration and thoughts.</strong><br><br>You draw inspiration for your thoughts from the outside world and from the people around you. You love the creative atmosphere and enjoy immersing yourself in it by attending various cultural events. But do not forget that excessive conditioning can confuse your consciousness and give you a headache at the body level.",
            "gate_50_6": "Gate 50.6 (Design Sun) – Moral Responsibility, Nuance, Demolishing Preconceptions, Ethical Artistry<br><br><strong>Quote:</strong><br>All of Fellini’s films, as the director noted in a letter about Amarcord to the Italian critic Gian Luigi Rondi, 'have the tendency to demolish preconceived ideas, rhetoric, diagrams, taboos, the abhorrent forms of a certain type of upbringing.’" (p.120)<br><br><strong>Explanation:</strong><br>Gate 50 represents values, ethics, and the responsibility of maintaining or transforming cultural norms. The sixth line has a revolutionary quality—someone who questions and dismantles limiting beliefs to make space for a new way of thinking. This quote directly illustrates how Fellini used cinema to challenge societal conditioning, break taboos, and deconstruct rigid ideological frameworks, embodying the transformative potential of Gate 50."
         

“throat”: “Throat Centre <br><br>
                <strong>Manifestation of the inner self in words or actions. </strong><br>
               You know when to speak and when to be silent, and you are equally comfortable with both. You have your own, constant and unique way of expressing yourself. If it is for you to speak, you are able to express your position or attitude to an issue in a clear and convincing way. However, be careful not to turn your oratory into a tool for psychological pressure”

“g_center”: “G Centre  <br><br>
                <strong>Impersonal (transcendent) love and vector of movement through life.</strong><br>
              You understand other people's goals and aspirations well, but you cannot say that about yourself. You do not have a clear idea of who you are, because you feel completely different around different people. You take over the style, behaviour, hobbies and even food preferences of the person you are currently close to. So it is very important for you to be in the right place and around the right people for you. You are able to experience life from all angles, changing your direction, and experiencing all the variety of manifestations of love.”

“sacral”: “Sacral Centre <br><br>
                <strong>A motor centre. The Generators’ creative energy source.</strong><br>
                 You have a powerful source of vital energy inside you. If you act from Response, your enthusiasm and diligence will become an example for others. To avoid depression, do not force yourself to do things that you are not interested in and do not need. Learn to listen to your body and put your personal interests first.”

“ego”: “Heart Centre (Ego) <br><br>
                <strong>A motor centre. Self-esteem, willpower, material interests. </strong><br>
               You sense other people's willpower, level of self-esteem and ability to achieve material success. You know the real cost of things and the effort involved. But your own self-esteem is unstable, and it should not depend on someone else's opinion. Choose your social circle carefully - you reveal yourself where you are accepted as you are, not for any achievements. Your real value lies in your uniqueness! In order not to create unnecessary stress for yourself, you should not distribute promises to everyone and make unnecessary commitments.”

"gate_50_6": “Gate 50.6 (Design Sun) – Moral Responsibility, Nuance, Demolishing Preconceptions, Ethical Artistry<br><br>
                <strong>Quote:</strong><br>
                All of Fellini’s films, as the director noted in a letter about Amarcord to the Italian critic Gian Luigi Rondi, 'have the tendency to demolish preconceived ideas, rhetoric, diagrams, taboos, the abhorrent forms of a certain type of upbringing.’" (p.120))<br><br>
                <strong>Explanation:</strong><br>
                Gate 50 represents values, ethics, and the responsibility of maintaining or transforming cultural norms. The sixth line has a revolutionary quality—someone who questions and dismantles limiting beliefs to make space for a new way of thinking. This quote directly illustrates how Fellini used cinema to challenge societal conditioning, break taboos, and deconstruct rigid ideological frameworks, embodying the transformative potential of Gate 50.”

"gate_3_6": “Gate 3.6 (Design Earth) – Experimentation, Trial and Error, New Forms, Creative Struggle
<br><br>
                <strong>Quote:</strong><br>
              “ Movies now have gone past the phase of prose narrative and are coming nearer and nearer to poetry. I am trying to free my work from certain constructions — a story with a beginning, a development, an ending. It should be more like a poem with meter and cadence.” (p. 71)<br><br>
                <strong>Explanation:</strong><br>
                Gate 3 is about ordering chaos, finding new structures, and embracing mutation. The sixth line often points to someone who experiments, makes breakthroughs, and ultimately revolutionizes an art form or field. Fellini’s desire to break away from traditional storytelling in favor of a freer, more poetic form reflects the essence of Gate 3.6—innovation through disruption.”

"gate_43_6": “Gate 43.6 (Design Moon) – Radical Vision, Mental Clarity, Inner Knowing, Defying Conventions <br><br>
                <strong>Quote:</strong><br>
               “Because Fellini is primarily an artist and not an ideologue, it is not surprising that the few basic beliefs he holds in this regard are rooted ultimately in his aesthetics. As we have seen from our discussion of 8 1/2, Fellini locates the focal point of creativity in the individual and his fantasy life. Consequently, anything that deforms, obstructs, represses, or distorts this creativity or the growth of a free consciousness within the individuals making up society is to be opposed.” (p. 119) <br><br>
                <strong>Explanation:</strong><br>
                Gate 43 is about unique insights and breaking away from conventional wisdom. The sixth line is the visionary who brings new perspectives that challenge collective thinking. This quote highlights Fellini’s deep commitment to personal creative freedom, rejecting ideological conformity and emphasizing the importance of individuality—precisely the kind of radical independence that Gate 43.6 embodies.”

"gate_47_3": “Gate 47.3 (Design Venus) – Processing Confusion, Finding Meaning in the Abstract <br><br>
                <strong>Quote:</strong><br>
               “<em>8½</em>was initially planned as a simple film about a film director unable to make a film, but as Fellini’s own doubts and uncertainties increased, the work transformed into a labyrinthine exploration of memory, fantasy, and self-doubt. Rather than forcing a logical structure, Fellini allowed the film to emerge organically, embracing the confusion at its core.” (p. 180)<br><br>
                <strong>Explanation:</strong><br>
               Gate 47.3 is about sitting with confusion until insight emerges. Fellini’s creative process for <em> 8½</em>—starting from uncertainty and allowing the film’s structure to evolve intuitively—embodies this energy. His genius lay in not resisting the confusion but rather embracing it as part of the journey toward meaning.”

"gate_40_5": “Gate 40.5 (Design Mars) – Willpower, Aloneness & Restoration of the Tribe <br><br>
                <strong>Quote:</strong><br>
                “Although Fellini was surrounded by a loyal team of collaborators, he often withdrew from them before starting a new project. He required solitude, cutting off social interactions, to find his creative vision. Only once he had internally resolved his ideas did he return to his collaborators to bring the film to life.” (p. 97)<br><br>
                <strong>Explanation:</strong><br>
               Gate 40.5 represents the tension between individual willpower and community. Fellini’s need to retreat into isolation before re-engaging with his creative “tribe” mirrors this dynamic. His films often featured lone, willful protagonists, reflecting both his own nature and the archetypal journey of Gate 40.”

"gate_7_3": “Gate 7.3 (Design Jupiter) – Pragmatic Leadership, Balancing Idealism & Realism<br><br>
                <strong>Quote:</strong><br>
                “Fellini managed to maintain creative control over his films while skillfully navigating financial and political constraints. He was an expert at persuading producers to support his vision, often securing funding for unconventional projects that might have otherwise been rejected.” (p. 231)<br><br>
                <strong>Explanation:</strong><br>
               Gate 7 in Line 3 is about leadership that balances idealism with practical considerations. Fellini’s ability to secure funding and navigate industry constraints while staying true to his artistic vision exemplifies this energy. He was a leader who understood both the dream and the reality, ensuring his ideas could manifest successfully in the world.”

"gate_60_4": “Gate 60.4 (Personality Sun) – Acceptance, Limitation as a Catalyst for Innovation<br><br>
                <strong>Quote:</strong><br>
                "Fellini discovered that censorship, budget constraints, and technical limitations often fueled his creativity rather than hindered it. He embraced these constraints, using them to develop innovative cinematic techniques, such as the dreamlike artificiality of <em>La Strada</em> and <em>8½</em>." (p. 142)<br><br>
                <strong>Explanation:</strong><br>
                Gate 60.4 is about accepting limitations as a necessary condition for creativity. Rather than resisting external constraints, Fellini used them as a springboard for artistic breakthroughs. His ability to work within—and even thrive under—limitations embodies this gate’s energy.”

"gate_56_4”: “Gate 56.4 (Personality Earth) – Narrative, Inspiration, Audience Connection, Imagination Over Facts<br><br>
                <strong>Quote:</strong><br>
               “ It would be difficult to find a statement designed to infuriate contemporary film critics more than Fellini’s belief that an artist can speak sincerely and directly to a spectator of a film and that the film, considered foremost as a work of art, represents primarily a moment of artistic expression that establishes a mysterious relationship between storyteller (Fellini) and viewer (the public). The visual images narrating the director’s story are ultimately derived from the director’s dream life. Rather than ideological pronouncements, Fellini’s images typically aim at the communication of emotions or sentiments rather than ideological statements.” (p. 5)<br><br>
                <strong>Explanation:</strong><br>
                Gate 56 is about the power of storytelling, particularly through personal experience and emotional connection rather than factual exposition. The fourth line emphasizes using past experiences to inspire and move others. This quote illustrates how Fellini saw film as a direct dialogue between artist and audience, aiming to evoke emotions rather than impose ideology—perfectly embodying the essence of the 56th gate.”

"gate_26_3": “Gate 26.3 (Personality Venus) – Persuasion, Getting Maximum Reward with Minimum Effort<br><br>
                <strong>Quote:</strong><br>
               “ Fellini was a consummate showman, not only an artistic genius but also a master magician and even something of a con man. He was a believer in the power of illusion and prestidigitation, an artist who preferred artifice to reality, and a man who believed that dreams were the most honest expression possible for a human being.” (p. 4)<br><br>
                <strong>Explanation:</strong><br>
              Gate 26 is the energy of persuasion, salesmanship, and the ability to turn raw potential into something marketable. The third line often carries an element of calculated risk, trickery, or cleverness in navigating power structures. This quote captures Fellini’s ability to enchant and persuade, both in his films and in how he presented himself—blurring the lines between illusion and reality, making the “con man” archetype a central part of his artistic identity.”

"gate_32_6": “Gate 32.6 (Personality Mars) – Fear of Failure, Endurance & Transformation<br><br>
                <strong>Quote:</strong><br>
               "Fellini had reached the summit of his career with <em>8½</em>, but his reputation suffered a serious setback with Juliet of the Spirits, a film that was generally seen as a pale imitation of his earlier work, and Fellini’s Casanova, which, despite its technical brilliance, was rejected as cold and impersonal. Yet Fellini refused to allow these failures to define him. He reinvented himself and continued making films that challenged both himself and his audience." (p. 215)<br><br>
                <strong>Explanation:</strong><br>
               Gate 32.6 is about endurance in the face of failure—understanding that transformation comes from persistence. Despite critical setbacks, Fellini’s refusal to let past failures define him shows his alignment with this gate. His ability to re-emerge with bold new projects reflects the energy of resilience and long-term success.”

"gate_7_2": “Gate 7.2 (Personality Jupiter) – The Advisor, Influence from Behind the Scenes<br><br>
                <strong>Quote:</strong><br>
               "Fellini has frequently compared his set to an ocean voyage like that of Columbus toward the New World: The crew constantly attempts to turn back, but the director-captain must somehow lead them all to a successful landing." (p. 3)’<br><br>
                <strong>Explanation:</strong><br>
                Gate 7 in Line 2 represents unseen leadership—guiding others without always being the visible authority figure. Fellini’s metaphor of the film set as a voyage, with himself as the captain who must lead a hesitant crew, illustrates this perfectly. He was not a dictator, but his leadership ensured that his artistic vision was realized, influencing his collaborators from behind the scenes.”
        };

        popupContent.innerHTML = contentMap[id] || "No content available";
        
        const closeBtn = document.createElement("button");
        closeBtn.innerHTML = "X";
        closeBtn.style.position = "absolute";
        closeBtn.style.top = "5px";
        closeBtn.style.right = "5px";
        closeBtn.style.cursor = "pointer";
        closeBtn.onclick = function () { popup.style.display = "none"; };
        popup.appendChild(closeBtn);
    }

    document.getElementById("close-popup").addEventListener("click", () => {
        document.getElementById("popup").style.display = "none";
    });
});

