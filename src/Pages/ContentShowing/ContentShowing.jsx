import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import { getContentShowing } from "../../Slices/content";

const ContentShowing = () => {
  const dispatch = useDispatch();
  /*eslint-disable*/
  useEffect(() => {
    dispatch(getContentShowing());
  }, []);

  const navigate = useNavigate();
  const { contents, isLoading } = useSelector((state) => state.content);
  if (isLoading) {
    return <LoadingPage />;
  }

  const handleNavigate = (contentId) => {
    navigate(`DanhMuc/${contentId}`);
  };

  return (
    <div className="container mx-auto max-w-6xl my-10 ">
      <h1 className="text-center text-3xl font-bold mb-10 ">
        DANH SÁCH CÁC KHÓA HỌC
      </h1>
      <div className="grid grid-cols-3 gap-4 ">
        {contents.map((content) => {
          return (
            <div
              key={content.maDanhMuc}
              className="relative mx-auto hover: cursor-pointer"
              onClick={() => handleNavigate(content.maDanhMuc)}
            >
              {content.maDanhMuc == "BackEnd" && (
                <img
                  src="https://hrchannels.com/uptalent/attachments/images/20210714/1626231329437-ky-nang-cua-back-end.PNG"
                  alt="#"
                  className="w-64 h-72"
                />
              )}
              {content.maDanhMuc == "Design" && (
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="w-64 h-72"
                />
              )}
              {content.maDanhMuc == "DiDong" && (
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBEQEhIVFRUVEhgVFhUVFRgTFxgYFxIXFhgXFxUkHSogGBolHRUWIjEiJSstLi8wGCAzODMsNyotLisBCgoKDg0OGhAQGy0lICYyLS0tLS4tMC0tLS0uLS0vLS8tLy8tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLf/AABEIALkBEAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xABNEAABAwICAwkKCwUHBQAAAAABAAIDBBESIQUGMRMUIkFRYXGR0TIzUlSBkpOxstIWNEJTVXJzlKHB4QcXIySCFWJkdKOz0zVjg8Lx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAUBBv/EADoRAAIBAgIGCAUCBAcAAAAAAAABAgMRBCEFEjFBUXETUmGBkaGx8BQVwdHhIjIkQmKSIzM0U3KCov/aAAwDAQACEQMRAD8A3URF9QfOhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBeK46paAjdGKiVodiJwNPc2BtcjjuQVat4RfNR+Y3sWGrj4Qk4pN2NlPBynFSbsckRdb3hD81H5jexN4RfNM8xvYq/mUeq/En8vfW8vyckRdb3hD81H5jexN4Q/NR+Y3sXnzOPV8x8A+t5HJEXW94Q/NR+Y3sTeEPzUfmN7E+ZR6r8R8vfW8vyclRdWl0XA4FphjIP9wD8eJUDWXRAp5QG3wPGJt9ottbfjtl1rRQxkKstW1mVVsLKkta90RCIi1mUIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgOn6tfFIPqfmVKrnetkz26Gpix72EyRC7HOY6xLrjECCqFvybxmo+8S+8uPDBSruU00s2jrSxUaMYxknsR+gVC/2IQ+qkbUTNdUBoHCBEWFtrxNIsD0rju6VGDdN8VGHFYfzEuZtc24XFlf6wWLfk3jNR94l95WLRtTdNEHj6eV4vj7zOufBqf6Sqv8AT91fPwZqPpKr/wBL3FyXfk3jNR94l95N+TeM1H3iX3lP5dV6y8PwR+PpcH77zuGh6B8LCx88k5LsWOXDcCwGEWAyyv5SpFfn7fk3jNR94l95N+TeM1H3iX3lF6LqN3ckerSFJbn77z9Aql/tC20/RJ/6LllXXTiN5FTUXDSfjEvJ9ZdL1xzioic7xHb9WNeU8LKhXhrPbf0FTERrUZOK2W9SrL1eL1dQ5qCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiALXranc2F207AOdbCh9Pv7lvl68u1Qm7RbNujsPHEYqFOWza+STf0sfddrNNLStpn4Sxr2PaQLObgcSRzjPpUdTzte5rGm5JsMj2LWG0K06B0bG1kTmx4ZDGMbs75gE5E5LIsR0EHqrNvLmz6LH6Io1a0Gv0xSetbYlHf37PM1dOaUjbHDS5DcrknO5xZ8nP6lC79j8L8D2K5SavUrnFzogSTckufmfOXnwapPmR5z/eV9GfRwUdvF8W9pwcTClWquaTS3Lglkl4WKdv2PwvwPYvd+x+F+B7FNa0aFp4qZ8kcYa4OaAbuO1wByJUhoSPR29oN10VWyybm3HJHDK5j3Wzc0iQAg8ynPFOCvYqjg4S3v33FV37H4X4HsTfsfhfgexXjctFfQ2kPQTf8AIm5aK+htIegm/wCRVfH/ANL8vuT+Ah1n77ig1lWwxvAdmWniPJ0Lq+uHeaH7I+zGqZrbHQb0k3DRtXTyXbaWaKRjAMYuC4vIzFwMuNXLXDvNF9kfZjVbrdLVpytb93oeyoqlRkk77PUq69Xi9W05yCIiHoREQBERAEREAREQBERAEREAREQBERAEREBH1ukwwloFyNuVgO1QtTO57sTtv4AcgVimoY33u2xNziG3pULNouVpthxZ7W5//FjrT1Zasn2n2Wg4YZ09enFqWUW3vbzds9nZZeR86LpTJIBxDN3QO1XzR1OXWwi5d6hz8Q51XtE0m4xuc7ujmeYAZD1qe1WqrUsWMXbJE3FbJ2edweni2FY6b6SpKaz1cl37fLYXaaquNKFO9tZu/JbPNmcrJDGXODW7Tszt5FmbWEWAa02yBIz9a8FRiID8m3ucIz8hWu8uB8zZFc11H8nID4TPbCq1I2n3NmLeeLCL45qxr72+UG8EHoyVu1+nL6aV5FruZkOZwAz4zzqE0Y+fcYsJq7YBbBU0zG2t8lrhcDmK9lJqC3d9iyCNHDTf4D09cmGm/wAB6euUxjn8Ks+9UvYmOfwqz71S9io6SXH/ANFmqVzSgg3J2DemLK25S1T37eIP4PWuq64d5ofsj7Ma53rC+be78Zqi3Lvs8EjO6G1rRiK6Jrh3mh+yPsxqcW3Up34y333FNf8Aypd3qVZeoi6BywiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgPeyy1tJVxjDSAMyQbi/wCa2FHadtuYvtxi3laVnxFGFRXktnuzOvobFzpYiNNftk1ddtnZrg91zUqdNOMb22GbSNnKLcqtGr3xSn+yb6lQZO5d0H1q3aG1F0hNTwzR1bWskja9rTLKLNcLgWDbDyLNDoqUdyv9js6aUpzguwsCKL/dzpTx1nppvdT93OlPHWemm91S6ej10cToZGDXP4m/6zPbC0tVNRIaukbVSVW43kcyxa23BNu6JGa+dadTa6mpXzz1LZI2loLRJI4nE8NGRaBtIVj1LohLoaJhkZHapkN3mwObhbpzXsqicE4Ssm7XROMLbUav7r6T6QHVH7yfuvpPpAdUfvKV+DjfG6fzx2rI7VQgAmohAIuCTkRyjlCXX+8/7fwS/wCvmQx/ZhSfSI6o/eVx0ro+CdkLDVMbuTcNw5hvk0X25dyob4Lf4mDzkl1WwHC+pgaeRxwnqKi1ByTdZ3V7fp8dx41dWccuZsN1WpyQBVtJOQAwEnoGJQGmKEQTvhDsWG2ZFr3aHbPKp7ROgmsnifvqB2F4OFrszzDPaozW/wCOzdLf9pispTfS6uvrKzey2dzJiKUIwulbPj2EQi+GStN7OBttsQbdK+1sMQREQ8CIiAIiIAiIgCIiAIiIAiIgCIiAIiIAqzrJWY5GxMzwHO3G42sB0fmpzSVVucT38YGXScgofVyguTO/PhHDflyOL8utUVbyagt/odXR6jRhLFz/AJcorjJr6ffgaFS0hrg4WIFiOQ3W1SOg3NmI0d8Ivjlrmvv/AHg04Qfq5LFpgcOX6x/3FM6MdPuMWF1XbALYJ6drbW+S05gcxVDerHLjxtuOtpKWvKm31U/G5pY6floPTaQ7Ux0/LQem0h2qXx1HhV33mmTHUeFXfeaZV674v+8wW92K7pJ0O5uwGkvl3qWse/aNjZOB1+RXTV//AKJB/m5PU9VzT7ptwdjNURdvfZoHs7obWt4R8iu/7PdFNqdERsc4tAqJHXbblI/NT6VQjGcnkpcb7mRUb5LgQatuku8UX+Xb7LVt/AiL52Tqb2KSqNAscyJhe4CJgYDlmAALnqXlfG0pONm8m9z4Mj0UrNe9pUWbR0rJrx8bP2bfzVkGrDPnHdQXxp7QjJHOmcXXLQwgWyAN8QPKq44ynGop3ySfm0ShQk/08bfUp2gfjUH2rfaUd+1SRwmmw7C9gPoBl1gK/UWqcTHslbK84XBwHBsbG/IuOftDq5XaQqhJcESFrW8QaMmG3KW4TfnXW0dKOKxilB5RjnfmvfYXYfDylKN9zuV+Coe1wLXOB5QSF0GmDsDcXdYRi6bZ/iucBXbV4yGG8hJGWG+3Dbj5uRdnStO8Yzy+r97xpinenGd1k+98vqSqIi4h8+EREAREQBERAEREAREQBERAEREARblHUgWZuLJHF1gX473NgBk4BTlbRPEj2x0UbmA2DjiztkT3zZe6qlVUXZ+q+5bGnrK69H9CgawSR4WRyPLAXYsWAubllYm/B28+xSFG+MsbuRBYBYFpuMuJWplMQHumo4msbG5xzdmbWa3vh2uIUPBUwsvgpKduLM4WvF/JjSE4ybcVnlvTRfUf+DGnJ2tdrJ73m2rJ9iK/rjol7I21AH8N8THE3GTsWAjDe/EDs+UofRs7ngMZTUzsIzc+EE9LnXzJXQ9dqSn/ALPp62SBr3twRhuOVrQwucSGhrxntzN1i0PooRzSBlCx0JkDo3B73F8RaHMc3FKRisQDkBzKiFSlqZt3u8skst13LlbJXN+JqylSg1tUYx2N8nln5FIrZXxAF1LRkHjEIIv15L5oqh8t8FJSWG0mAAetdL0xRiXdrUDCDC5zRINsrGlzQQ19sJwgZWzIVZ1S0/TnDipIQGuJLY2vvyggOkI22vfkSMoz/bHuuvDaY5VJxp60mttr2drcbWKrpYva3C6np2B2x8UYacs7B18lg0fRzPHAJa0cZcWi/Nyqwa7VcTse5gtD3hzWGwLeM5DIC9wOlbeo9fAzc3yMLxGCCwBp4RvYuB4syelXpWjkny38ir4ifRqWW2191uJUaxk0Rs9zs9hDyQeg3WWjo6iRuJr3AcRc9wv0KT1wnjJwsuLvLmg2u1tjkbZcf4Ke1N0jTsa18jDIBFgwgNNjYAkg8eWXSvXkm0r9g+Il0cZOyu7Xztz7yjVu7Rkte54NvCNjzg3XY9bJCIqEgkHcr5H+7GuXa1ysJaxpvhxbdoBtYHnyXUNcO80P2R9mNUVUumpr/l6FqqSnhnJ7cvU1mzMqI7ufucjBdzr2GEbTt2epcu1prI5KhxixFgaGhztr7X4RHFtyHIArZVw443svbE0tvyXCq9Jq5K6QBwwsBu51wRbm48109GQoYXXqznZLYnsSe22955JbtyzOnoyrGvK7S6TZ2yVtvDnbhdkaNHy8A7m6zrFpDb3B2WyXQTTOY2MPaWkxMNiLEXaLgjlBuPItmmZm1rcswBzZgBbuss7XSNaMy0EOPObZeT81z3pmpjakYOCSV977vRcbvgadPYWFOim3nu+vkRCIi0HygREQBERAEREAREQBERAEREARF4gJPQLRu26ONmxNLybXsRk3Lj4RavjelP4wfQO95Z6Tc2UzjLj/AI0lhhw3wxWJ28WJw81Yr0vJUdbOxUXbk2r8Mkt3c99y6yUUnbjnff8AhIyVETIqb+G/Hu0gF8GDgxZkWv4Tm+aopSOnbNkbC2+GJgZnYm54br8+JxHkUcp0s463HP7eViFTKVuGX387k5roy+haccssQ/Fyq1RoinmpqWeWZ8bo2mnJEZkJ3Ml0dyCLHA8D+lWnXI20LTH/AL0XtOVX1eqIZI6mCRxLRHu43MtxXhvite4zY93kas1BJU5S4Sey17ZX2p8+42VZTvGMd8e21+7Mw0GjKOKeKobXSF0UjXgmA/JcDa+LYbW8q09N6HjiqZWsc4NxY2EG3AeMbLZeC4dS3d9aN5ajzouxZtO1ED4KaeJxwtBp3F5bixR2ey5GXcP6mrTGymr3zyztz3JdviUN1dR2fhrct77UV12j2nMl5POf0XraBozBeOg2/JZN8s8JvWm+WeE3rWjViU9JW4sxHRzOV/WOxGUDRsc8dBt+Szb6Z4Teteb5Z4TetNWJ50lbizUq6FoY9wLrhpO39F1vXDvND9kfZjXKq2oYY3gOF8J4+ZdV1w7zQ/ZH2Y1kxCSrUrf1ehqhKboT1r7tpVlHae0k+BjHMtcuscQuLWJ5VIqA1xP8Nn1z7K24elCrVjCok09qfI90dOUcTBxdn+DLofWZ0krGGOxPymk5Wzva3NyqbVL1S7//AEP9bVdFLFYWjh6rjRjqrK+3b3tmrTFedWtFTd7LLvz98giIs5yQiIgCIiAIiIAiIgCIiAIiIAi9W5oaMGZhd3LLvd9VgxHrtbyryUtVNnqV2kbmkJ4mFkDoQ8xMDCd0c3hHhPyGXdOI8i90XLA6Vv8ALgBoLnHdXmwY0uOXHst5Vqv03clzoqckkkkxjaTckm6z/wBoDesr8MTMb2xtLGhpt3bxe+ywYP6lmdOShZp55X1nte3K/fkaFOLldPLkt3d3ZkXNKXOc87XOLj0k3K+FiM7PDb1heb6Z4Q61rsZrnS9FaPhnoYI5o2yMwg4XgOFwTY2WSn1WoY3Y2UsLXAEXawA2c0tI8oJHlWPU2tZJSMDHAmPgOA4iDcdYIKn183VcozlG72s71KzhF9iIH4G6P8Sg9G1ffwVocBi3rDgLw8twDDiALQ63LYkX51Nooa8+LJ2RVKrV7RzXYRQwG23+G0fktim1W0a8XFFBzjc2rbq6J+MlouCbrc0fTljTfaSrZStG6k782UQc9dprIjvgdo/xKD0bU+B2j/EoPRtU6ir158X4l9kQJ1N0f4lB6Nqh9fmBopmgWADwByAYAArsuf8A7QdJx7tHFiGJjSXc2O1h02bfyhacE5Srx37fQzYuypPu9StKu659xF9Z3qU5vpnhBQWtsjXMjsQeEdnQvqMCv4iHP6MxYD/UQ97iN1TP8z/4netiuyo+qZG+jc2/hO25cbFdg8co617pB3rss0m/4h8kfSL1FiMB4iIgCIiAIiIAiIgCIiAL5fextt4uNfSICOlin8K/QbLc0ZUSwR1D2lwmdhYz5VmF2KR2dx8hrf6isqJK0lZr3729gj+l3Xv36mudPV3zj/Rs91NP6RfMymaXF5Ywl7i3Dw3PJcLWAyaGC/MtleqKhTTUlFLkkvRHrlJpptvm2yuWXyrG5YHq5TK9Uj9G6Tmp37pDIWO2G1iCORzTkVPjX+t8KP0f6qHkWFyhKlTqO8opsnGpOCtFtFmi1+qNxkxOjEgcws4Bs5pxB4OeRHBNzzrW+H9b4Ufmfqq25fLlFYSh1F4EviavWZcKzX6otEY3MuYxugMZyeHEGxvsIAPlWt+8Ct5Y/M/VVVeosJQStqrwDxVV/wAzLT+8Ct5Y/M/VefD+t8KPzP1VXX2F78LQ6i8Dz4mr1n4lhn17rXNLcbG342sAPkJuq3JIXEucSSTckm5JPGTxrKxZ2KcKcKf7IpEJTnP9zvzNG6xMme1wcYYngXs2QY27LZ7LqcjWditjU1d1ydGbpS1klfde+Xg0VymDuCDDC3C02fG3huxEEh54xyLYETvBPUVYl4VX0nYKjdSWs+zyyIFtO/ia7qIWdkE3FiH9X6qVXq81yGoalOyUHhOFuTaVuLxFFskkERF4AiIgP//Z"
                  alt=""
                  className="w-64 h-72"
                />
              )}
              {content.maDanhMuc == "FrontEnd" && (
                <img
                  src="https://funix.edu.vn/wp-content/uploads/2022/02/Frontend-Developer.jpeg"
                  alt=""
                  className="w-64 h-72"
                />
              )}
              {content.maDanhMuc == "FullStack" && (
                <img
                  src="https://www.tma.vn/Media/Default/BaiDang/8289ccce-4d1f-499a-bb64-0e8eb753e18f.png"
                  alt=""
                  className="w-64 h-72"
                />
              )}
              {content.maDanhMuc == "TuDuy" && (
                <img
                  src="https://resources.mindx.edu.vn/uploads/images/tu-duy-lap-trinh.jpg"
                  alt=""
                  className="w-64 h-72"
                />
              )}

              <div className="text-[#082346] font-bold">
                {content.tenDanhMuc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentShowing;
