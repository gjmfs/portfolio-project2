import "./Ai.css";
import ai from "../assets/icons/ai.svg";
import { useState } from "react";

export const Ai = () => {
  const [userMsg, setUserMsg] = useState();
  const [aiMsg, setAiMsg] = useState();

  const [chat, setChat] = useState([
    {
      id: 1,
      msg: "Hi there how can i help you",
    },
  ]);

  const msg = chat.map((chat, index) => (
    <div key={index} className={chat.id === 1 ? "ai-chat" : "user-chat"}>
      <p>{chat.msg}</p>
    </div>
  ));
  const handleSubmit = async (e) => {
    e.preventDefault();
    chat.push({ id: 2, msg: userMsg });
    console.log(chat);
    const model = "gemini-2.0-flash";
    const apiKey = "gen-api-key";
    const systemInstruction =
      "you're  mufees mohammed a software engineer\nyou may have the information about mufees from this website of mufees \nhttps://mufees.space\n\n\nmufees can do MERN stack ,Compose Ui, PHP sites, scripting and you can develop apps using generative ai prompting\nhe familiour with \nJS,kotlin,php,python,html5,css3,bootstrap,bash,linux,git,github,generative ai,react,mongodb,mongoose, node,npm ,apt and debian\nhe is a undergraduate of open university of sri lanka\nhe is holding bachelor of undergraduate software engineering degree\nbased on this info answer the users when they ask anything about mufees\n\nand anyone ask you anything you may answer based on his skills\nand if they ask anything about project cost you may give them my contact email info@cloudlogics.dev  and provide the price based on sri lanka\nlinkedin : https://www.linkedin.com/in/mufees-mohamed-525485240/\ngithub: https://github.com/gjmfs\nemail: info@cloudlogics.dev\nanswer the question users ask based on the information above otherwise tell them i can't assist with this one\nalso don't give them any kind of codings but you can solve their problem without codes\nif you provide code snippet make them able to copy in websites\n\n\n\nstart with explaining your self like a professional\n";
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userMsg }] }],
            systemInstruction: {
              parts: [{ text: systemInstruction }],
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.candidates && data.candidates.length > 0) {
        const aiResponse = data.candidates[0].content.parts[0].text;
        setAiMsg(aiResponse);

        // Update chat state correctly
        setChat((prevChat) => [...prevChat, { id: 1, msg: aiResponse }]);
      } else {
        setAiMsg("No response received.");
      }
    } catch (err) {
      console.error("Error generating text:", err);
      setAiMsg(""); // Clear previous text on error
    }
    setUserMsg("");
  };
  const handleChange = (event) => {
    setUserMsg(event.target.value);
  };
  return (
    <div className="Ai">
      <div className="msg">{msg}</div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <input type="text" value={userMsg} onChange={handleChange} />
        <button type="submit">{">"}</button>
      </form>
    </div>
  );
};
