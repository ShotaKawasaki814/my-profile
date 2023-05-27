import Layout from "../layout/layout";

type CareerContentsType = {
  id: number;
  date: string;
  content: string;
}[];

type skillContentsType = {
  id: number;
  firstIcon: string;
  secondIcon?: string;
  skill: string;
  firstDescription: string;
  secondDescription?: string;
}[];

const Home = () => {
  const careerContents: CareerContentsType = [
    {
      id: 1,
      date: "2022年1月",
      content:
        "社会経験を身に付けたく、株式会社エス・エム・エスに長期インターンで入社",
    },
    {
      id: 2,
      date: "2022年5月",
      content:
        "近くでビジネスを見ることができ、広い事業範囲に関われる環境を望み、ホンダモビリティソリューションズ株式会社に長期インターンで入社",
    },
    {
      id: 3,
      date: "2023年1月",
      content:
        "IT業界で働くビジネスマンとして開発側の視点を持つことを目標に、ITスキルをつけることを目指し独学でRailsを学ぶ",
    },
    {
      id: 4,
      date: "2023年3月",
      content:
        "実務経験を積むため、フロントエンドエンジニアとしてSky株式会社に長期インターンで入社",
    },
  ];

  const skillContents: skillContentsType = [
    {
      id: 1,
      firstIcon: "/html.svg",
      secondIcon: "/css.svg",
      skill: "html・css",
      firstDescription:
        "様々なタグやスタイルを用いて、デザイン通りUIを実装できます。",
    },
    {
      id: 2,
      firstIcon: "/javascript.svg",
      secondIcon: "/typescript.svg",
      skill: "JavaScript・TypeScript",
      firstDescription:
        "フレームワーク(ReactやNext.js)を用いて、複雑なUIを構築できます。",
    },
    {
      id: 3,
      firstIcon: "/ruby.svg",
      skill: "Ruby",
      firstDescription: "言語の基本的な文法を理解できます。",
    },
    {
      id: 4,
      firstIcon: "/document.svg",
      skill: "その他資格",
      firstDescription: "TOEIC 810点",
      secondDescription: "応用情報技術者試験 受験済み(結果待ち)",
    },
  ];

  return (
    <Layout>
      <main className="flex flex-col font-NotoSans justify-center">
        <section
          className="h-[500px] flex flex-col justify-center items-center mb-3"
          id="Home"
        >
          <div className="tb:text-6xl sp:text-5xl xs:text-3xl text-2xl font-semibold mb-5">
            Shota Kawasaki&apos;s
          </div>
          <div className="tb:text-6xl sp:text-5xl xs:text-3xl  font-semibold">
            Profile
          </div>
        </section>
        <section
          className="tb:w-[700px] w-3/4 flex flex-col justify-center mx-auto mb-40"
          id="About"
        >
          <div className="tb:text-4xl sp:text-3xl text-2xl font-semibold mx-auto mb-14">
            About
          </div>
          <div className="flex flex-col justify-center tb:text-lg sp:text-lg text-sm text-gray-700">
            <div className="mx-auto text-center">
              2001年千葉県生まれ千葉県育ち。
            </div>
            <div className="mx-auto text-center">
              早稲田大学に在学しており、環境学を学んでいます。大学に通う傍ら、1年半程長期インターンの経験があり、カーシェア運営でのビジネス経験やフロントエンドエンジニアとしての開発経験もございます。
              IT技術とビジネスを結びつけ、技術で世の中に価値を生む上流工程やITスキルを生かせるビジネス領域にて活躍したいと考えています。
            </div>
            <div className="mx-auto text-center">
              温泉やサウナに行くのが趣味です。
            </div>
          </div>
        </section>

        <section
          className="flex flex-col justify-center items-center tb:w-[850px] w-4/5 mx-auto mb-40"
          id="Career"
        >
          <div className="tb:text-4xl sp:text-3xl text-2xl font-semibold mb-6">
            Career
          </div>
          {careerContents.map((content) => (
            <div
              className="tb:h-[100px] h-auto flex border-b border-gray-200 text-gray-700 my-auto tb:pb-0 py-2"
              key={content.id}
            >
              <div className="tb:w-[200px] w-1/4 flex items-center tb:text-lg sp:text-lg text-xs">
                {content.date}
              </div>
              <div className="tb:w-[650px] w-3/4 flex items-center tb:text-lg sp:text-lg text-xs">
                {content.content}
              </div>
            </div>
          ))}
        </section>

        <section
          className="tb:w-[850px] w-3/4 flex flex-col justify-center items-center mx-auto mb-35"
          id="Skills"
        >
          <div className="tb:text-4xl sp:text-3xl text-2xl font-semibold mb-6">
            Skills
          </div>
          {skillContents.map((content) => (
            <div key={content.id}>
              {content.secondIcon ? (
                <div className="flex items-center text-gray-700 h-[130px] tb:flex-row flex-col tb:mb-0 mb-4">
                  <div className="flex flex-col tb:w-[280px] w-auto mx-auto tb:mb-0 mb-2">
                    <div className="flex justify-center mb-0">
                      <img src={content.firstIcon} />
                      <img src={content.secondIcon} />
                    </div>
                    <div className="tb:text-lg sp:text-lg text-sm mx-auto">
                      {content.skill}
                    </div>
                  </div>
                  <div className="tb:text-lg sp:text-lg text-sm tb:w-[570px]">
                    {content.firstDescription}
                  </div>
                </div>
              ) : (
                <>
                  {content.secondDescription ? (
                    <div className="flex items-center text-gray-700 h-[130px] tb:flex-row flex-col tb:mb-0 mb-4">
                      <div className="flex flex-col justify-center tb:w-[280px] w-auto mx-auto tb:mb-0 mb-2">
                        <img
                          src={content.firstIcon}
                          className="w-[48px] mx-auto"
                        />
                        <div className="tb:text-lg sp:text-lg text-sm mx-auto">
                          {content.skill}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="tb:text-lg sp:text-lg text-sm tb:w-[570px] w-auto mx-auto">
                          {content.firstDescription}
                        </div>
                        <div className="tb:text-lg sp:text-lg text-sm tb:w-[570px] w-auto mx-auto">
                          {content.secondDescription}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center text-gray-700 h-[130px] tb:flex-row flex-col tb:mb-0 mb-4">
                      <div className="flex flex-col justify-center  tb:w-[280px] w-auto mx-auto tb:mb-0 mb-2">
                        <img
                          src={content.firstIcon}
                          className="w-[48px] mx-auto"
                        />
                        <div className="tb:text-lg sp:text-lg text-sm mx-auto">
                          {content.skill}
                        </div>
                      </div>
                      <div className="tb:text-lg sp:text-lg text-sm tb:w-[570px]">
                        {content.firstDescription}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </section>
        <section
          className="h-[300px] flex flex-col justify-center items-center"
          id="Account"
        >
          <div className="tb:text-4xl sp:text-3xl text-2xl font-semibold mb-8">
            Account
          </div>
          <a
            href="https://github.com/ShotaKawasaki814"
            className="cursor-pointer flex text-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={"/github.svg"} className="mr-2" />
            <div>Github</div>
          </a>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
