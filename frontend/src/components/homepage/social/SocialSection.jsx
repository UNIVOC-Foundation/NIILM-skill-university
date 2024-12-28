const SocialSection = () => {
  return (
    <section
      className="w-full h-auto py-12"
      style={{
        backgroundImage: `url("/images/event-banner.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full sm:w-10/12 mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl text-center font-bold">
          Follow @niilmuniversity
        </h1>

        {/* Social Media Cards */}
        <div className="w-full my-8 flex flex-wrap justify-center gap-4">
          {/* Card 1 */}
          <a href="https://www.instagram.com/niilmuniversity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <div className="h-[450px] w-10/12 sm:w-[360px] bg-white rounded-lg border-2 border-gray-300">
          
          <center>
           <img id="social" src="https://pbs.twimg.com/ext_tw_video_thumb/1808470420225662976/pu/img/wEuhTaMrw08Jw-Be.jpg" alt="" />
           <h2 id="social-text">Instagram</h2>
           </center>
          </div>
          </a>
          {/* Card 2 */}
          <div className="h-[450px] w-10/12 sm:w-[360px] bg-white rounded-lg border-2 border-gray-300">
            {/* Content inside the card */}
            <center>
              <a href="https://x.com/niilmonline">
           <img id="social" src="https://pbs.twimg.com/ext_tw_video_thumb/1808470420225662976/pu/img/wEuhTaMrw08Jw-Be.jpg" alt="" />
           <h2 id="social-text">Twitter</h2>
           </a>
           </center>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
