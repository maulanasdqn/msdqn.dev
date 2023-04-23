import { FC, ReactElement, useEffect, useRef, useState } from "react";
import "./styles.scss";

export const NotFoundErrorModules: FC = (): ReactElement => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const boxGhostEyesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const pageX = document.documentElement.clientWidth;
      const pageY = document.documentElement.clientHeight;

      // Vertical axis
      const mouseY = event.pageY;
      const yAxis = ((pageY / 2 - mouseY) / pageY) * 300;

      // Horizontal axis
      const mouseX = event.pageX / -pageX;
      const xAxis = -mouseX * 100 - 100;

      if (boxGhostEyesRef.current) {
        boxGhostEyesRef.current.style.transform = `translate(${xAxis}%, -${yAxis}%)`;
      }

      setMouseX(mouseX);
      setMouseY(mouseY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="wrapper">
      <div className="box">
        <div className="box__ghost">
          <div className="symbol" />
          <div className="symbol" />
          <div className="symbol" />
          <div className="symbol" />
          <div className="symbol" />
          <div className="symbol" />

          <div className="box__ghost-container">
            <div className="box__ghost-eyes" ref={boxGhostEyesRef}>
              <div className="box__eye-left"></div>
              <div className="box__eye-right"></div>
            </div>
            <div className="box__ghost-bottom">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="box__ghost-shadow"></div>
        </div>

        <div className="box__description">
          <div className="box__description-container">
            <div className="box__description-title">Waduh!</div>
            <div className="box__description-text">
              Halaman yang anda cari tidak dapat di temukan
            </div>
          </div>

          <a
            href="https://codepen.io/diogo_ml_gomes/"
            target="_blank"
            className="box__button"
          >
            Kembali
          </a>
        </div>
      </div>
    </section>
  );
};
