import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div className="about-me-wrapper">
        <h2 className="about-me-h2">About Me.</h2>
        <div className="inner-about-me-wrapper">
          <img
            alt=""
            className="about-me-img"
            src="https://i.imgur.com/1WlnVrp.jpeg"
          ></img>
          <p className="about-me-p">
            Hello, my name is Connor Burns and I am a software developer who has
            been practicing software development for about 6 months. I enjoy
            software development because I love to create and I also love to
            make quality work. I aspire to learn every day and hone my software
            development skills to build better and more efficient sites
            everyday. My goal with Minimum was to make a simple React app that
            is intuitive and feels inviting to the viewer without bombarding
            them with ads and too many sources of stimulus. I hope you enjoy my
            application.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
