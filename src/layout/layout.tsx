import Head from "next/head";
import { ReactNode } from "react";
import { Link as Scroll } from "react-scroll";
import { useModal } from "react-hooks-use-modal";

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  const headerContents = ["Home", "About", "Career", "Skills", "Account"];

  const [Modal, open, close, isOpen] = useModal("__next");
  return (
    <div className="flex flex-col max-w-screen-xl p-2 mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="tb:flex  hidden w-full  h-[60px] justify-end items-center font-NotoSans text-gray-500 text-xl sticky top-0 bg-white z-10">
        {headerContents.map((content) => (
          <Scroll
            to={`${content}`}
            className="mr-7 cursor-pointer"
            smooth={true}
            duration={600}
            key={content}
            offset={-100}
          >
            {content}
          </Scroll>
        ))}
      </header>

      <div className="tb:hidden w-full  h-[60px] justify-end items-center  sticky top-0 bg-white z-10">
        <img onClick={open} src="/menu.svg" className="ml-auto" />
      </div>
      <Modal>
        <div className="relative m-auto bg-white xs:w-[250px] xs:h-[320px]  w-[200px] h-[250px]  flex flex-col justify-center items-center text-gray-500 text-2xl">
          {headerContents.map((content) => (
            <Scroll
              to={`${content}`}
              className="cursor-pointer w-auto mb-2"
              smooth={true}
              duration={600}
              key={content}
              offset={-100}
              onClick={close}
            >
              {content}
            </Scroll>
          ))}
          <button onClick={close} className="absolute top-1 right-1">
            <img src="/close.svg" />
          </button>
        </div>
      </Modal>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
