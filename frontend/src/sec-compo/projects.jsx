import '../global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faFlagCheckered , faUser } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';

export default function Projects(){

    return(
    <>
    <section className="z-0 relative h-auto w-screen">

      <header className ="h-[10vh] w-screen text-white text-2xl p-4 flex justify-start items-center font-semibold cursor-pointer
      sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:textt-4xl
      sm:p-4 md:p-4 lg:p-6 xl:p-8 2xl:p-10">
        <span className="cursor-pointer over">
            Projects
            <div className="under"></div>
          </span>
      </header>

      <div className ="h-auto w-screen p-4 flex justify-center items-center flex-wrap gap-10 upscroll
       sm:p-4 md:p-4 lg:p-6 xl:p-8 2xl:p-10">

       {
        [
          ["1",faUser,"https://portfolio-eta-puce-34.vercel.app/","A personal portfolio website for official purposes."],
          ["2",faFlagCheckered,"https://f1withsainath.vercel.app/","A website for live streaming formula 1 races with feature of checking race time in different time zones."],
          ["4",faBowlFood,"https://campus-cafe.vercel.app/","A web app to order food in local cafeteria with order caert feature made with Context API. It will be done with backend + DB ASAP."],
          ["4",faYoutube,"https://you-tubeclone-coral.vercel.app/","A youtube clone website made with HTML & CSS based on Reacct.js further backend + DB will be done ASAP."],
        ].map(([key,icon,link,description]) =>(
          <div key={key} className="h-auto w-full rounded-lg bg-slate-700 text-white flex justify-evenly items-center cursor-pointer group
          sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3">

            <div className="h-auto w-1/3 flex justify-center items-center rounded-l-lg bg-contain">
              <FontAwesomeIcon icon={icon} className="text-5xl group-hover:text-purple-500" />
           </div>

           <div className="h-auto w-2/3 m-2 overflow-y-scroll custom">
              <p>{description}</p>
              <a href={link} className="text-blue-500">Click here to view web app!</a>
           </div>

         </div>
        ))
      }
      </div>
   </section>
   </>
);
}