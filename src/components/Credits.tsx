import Image from "next/image";

/** TheFlauxMedia credits strip: always the last element on the page, below the footer. */
export default function Credits() {
  return (
    <div className="flaux-credits">
      <div className="flaux-credits__inner">
        <div className="flaux-credits__left">
          <Image
            className="flaux-credits__logo"
            src="/theflauxmedia/whtlg.png"
            alt="TheFlauxMedia Logo"
            width={32}
            height={32}
          />
          <p className="flaux-credits__text">
            Website developed and handled by{" "}
            <a href="https://TheFlauxMedia.in" target="_blank" rel="noopener noreferrer">
              TheFlauxMedia
            </a>
          </p>
        </div>
        <div className="flaux-credits__copy">
          <p>© {new Date().getFullYear()} TheFlauxMedia. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
