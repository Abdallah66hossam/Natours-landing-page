import React from "react";
import style from "./stories.module.scss";
import video from "../../assets/video.mp4";
import avatar1 from "../../assets/imgs/nat-8.jpg";
import avatar2 from "../../assets/imgs/nat-9.jpg";

const Stories = () => {
  const data = [
    {
      img: avatar1,
      name: "mary smith",
      title: "I have the best week ever with my family",
    },
    {
      img: avatar2,
      name: "jack wilson",
      title: "wow! my life is completely different now",
    },
  ];
  return (
    <div className={style.stories}>
      <div className={style.video}>
        <video src={video} autoPlay muted loop></video>
        <article className={style.article}>
          <div className={style.center}>
            <h2>we make people genuinely happy</h2>
          </div>

          {data.map((story) => (
            <section className={style.story}>
              <figure>
                <img src={story.img} alt="human" />
                <figcaption>{story.name}</figcaption>
              </figure>
              <div className={style.text}>
                <h5>{story.title}</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </p>
              </div>
            </section>
          ))}
        </article>
      </div>
    </div>
  );
};

export default Stories;
