/* eslint-disable react/no-unescaped-entities */
export default function Contact() {
  return (
    <section className="w-screen h-auto flex flex-col justify-center items-center gap-10  transition-opacity duration-1000">
      <h3 className="noto-serif text-base">4</h3>      
      <a href = "/" id = "nav-title" className="text-8xl px-8 text-center w-full leading-tight tracking-wide noto-serif font-medium uppercase">
        <div>Get in Touch</div>

      </a>
      <p className="text-3xl px-8 text-center w-3/4 leading-tight tracking-normal inter font-light">
        {"If you have any questions or would like to discuss potential collaborations, feel free to reach out. You can contact me via email, and I'll respond promptly. Thank you for visiting my portfolio!"}
      </p>
    </section>
  );
}
