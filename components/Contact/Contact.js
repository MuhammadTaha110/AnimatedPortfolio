import { useState, useEffect, useRef } from "react";
import Filter from "bad-words";
import toast, { Toaster } from "react-hot-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import mail from "./mailer";
import styles from "./Contact.module.scss";
import { MENULINKS } from "../../constants";

const filter = new Filter();
filter.removeWords("hell", "god", "shit");

const toastOptions = {
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
    fontFamily: "var(--font-poppins), sans-serif",
  },
};

const empty = () =>
  toast.error("Please fill the required fields", {
    id: "error",
  });

const error = () =>
  toast.error("Error sending your message", {
    id: "error",
  });

const success = () =>
  toast.success("Email sent successfully", {
    id: "success",
  });

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
    username: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [mailerResponse, setMailerResponse] = useState("not initiated");
  const [isSending, setIsSending] = useState(false);
  const buttonElementRef = useRef(null);
  const sectionRef = useRef(null);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFormData((prevVal) => {
      if (
        value.trim() !== prevVal[id] &&
        value.trim().length > prevVal[id].trim().length
      ) {
        return { ...prevVal, [id]: filter.clean(value.trim()) };
      } else {
        return { ...prevVal, [id]: value };
      }
    });
  };

  const emptyForm = () => {
    setFormData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = {
      name: formData.username,
      email: formData.name,
      message: formData.message,
    };

    if (name === "" || email === "" || message === "") {
      empty();
      return setMailerResponse("empty");
    }

    if (!email.includes("@")) {
      toast.error("Please enter a valid email address", { id: "error" });
      return setMailerResponse("error");
    }

    setIsSending(true);
    mail({ name, email, message })
      .then((res) => {
        if (res.status === 200) {
          setMailerResponse("success");
          emptyForm();
        } else {
          setMailerResponse("error");
        }
      })
      .catch((err) => {
        setMailerResponse("error");
        console.error("EmailJS error:", err);
        toast.error(err?.text || "Error sending your message", { id: "error" });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  useEffect(() => {
    if (mailerResponse === "success") {
      success();
    }
  }, [mailerResponse]);

  useEffect(() => {
    setTimeout(() => {
      setMailerResponse("not initiated");
    }, 10000);
  }, [mailerResponse]);

  useEffect(() => {
    buttonElementRef.current.addEventListener("click", (e) => {
      if (!buttonElementRef.current.classList.contains("active")) {
        buttonElementRef.current.classList.add("active");

        gsap.to(buttonElementRef.current, {
          keyframes: [
            {
              "--left-wing-first-x": 50,
              "--left-wing-first-y": 100,
              "--right-wing-second-x": 50,
              "--right-wing-second-y": 100,
              duration: 0.2,
              onComplete() {
                gsap.set(buttonElementRef.current, {
                  "--left-wing-first-y": 0,
                  "--left-wing-second-x": 40,
                  "--left-wing-second-y": 100,
                  "--left-wing-third-x": 0,
                  "--left-wing-third-y": 100,
                  "--left-body-third-x": 40,
                  "--right-wing-first-x": 50,
                  "--right-wing-first-y": 0,
                  "--right-wing-second-x": 60,
                  "--right-wing-second-y": 100,
                  "--right-wing-third-x": 100,
                  "--right-wing-third-y": 100,
                  "--right-body-third-x": 60,
                });
              },
            },
            {
              "--left-wing-third-x": 20,
              "--left-wing-third-y": 90,
              "--left-wing-second-y": 90,
              "--left-body-third-y": 90,
              "--right-wing-third-x": 80,
              "--right-wing-third-y": 90,
              "--right-body-third-y": 90,
              "--right-wing-second-y": 90,
              duration: 0.2,
            },
            {
              "--rotate": 50,
              "--left-wing-third-y": 95,
              "--left-wing-third-x": 27,
              "--right-body-third-x": 45,
              "--right-wing-second-x": 45,
              "--right-wing-third-x": 60,
              "--right-wing-third-y": 83,
              duration: 0.25,
            },
            {
              "--rotate": 60,
              "--plane-x": -8,
              "--plane-y": 40,
              duration: 0.2,
            },
            {
              "--rotate": 40,
              "--plane-x": 45,
              "--plane-y": -300,
              "--plane-opacity": 0,
              duration: 0.375,
              onComplete() {
                setTimeout(() => {
                  buttonElementRef.current.removeAttribute("style");
                  gsap.fromTo(
                    buttonElementRef.current,
                    {
                      opacity: 0,
                      y: -8,
                    },
                    {
                      opacity: 1,
                      y: 0,
                      clearProps: true,
                      duration: 0.3,
                      onComplete() {
                        buttonElementRef.current.classList.remove("active");
                      },
                    }
                  );
                }, 1800);
              },
            },
          ],
        });

        gsap.to(buttonElementRef.current, {
          keyframes: [
            {
              "--text-opacity": 0,
              "--border-radius": 0,
              "--left-wing-background": "#5a5eff",
              "--right-wing-background": "#5a5eff",
              duration: 0.11,
            },
            {
              "--left-wing-background": "#3136ff",
              "--right-wing-background": "#3136ff",
              duration: 0.14,
            },
            {
              "--left-body-background": "#5a5eff",
              "--right-body-background": "#5a5eff",
              duration: 0.25,
              delay: 0.1,
            },
            {
              "--trails-stroke": 171,
              duration: 0.22,
              delay: 0.22,
            },
            {
              "--success-opacity": 1,
              "--success-x": 0,
              duration: 0.2,
              delay: 0.15,
            },
            {
              "--success-stroke": 0,
              duration: 0.15,
            },
          ],
        });
      }
    });
  }, [buttonElementRef]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = sectionRef.current.querySelectorAll(".staggered-reveal");

      gsap.fromTo(
        elements,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[4].ref}
      className="relative mt-30 w-full select-none bg-gray-light-1 pb-24 pt-20 transition-colors duration-300 dark:bg-black sm:pt-10 md:pt-8"
    >
      <div>
        <Toaster toastOptions={toastOptions} />
      </div>
      <div className="section-container flex flex-col justify-center">
        <div className="flex flex-col contact-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-dark-3 dark:text-gray-light-1 staggered-reveal">
              CONTACT
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              Contact
            </h1>
          </div>
          <h2 className="text-[1.65rem] font-medium md:max-w-2xl w-full mt-2 staggered-reveal">
            Karachi, Pakistan · +92 330 2458757 · mtahatalib110@gmail.com
          </h2>
        </div>

        <form className="staggered-reveal mx-auto w-full max-w-xl pt-10 sm:max-w-2xl">
            <div className="relative">
              <input
                type="text"
                id="username"
                autoComplete="off"
                className="block h-12 w-full rounded-[0.6rem] border-2 border-purple bg-white/80 px-4 font-mono text-xl text-gray-dark-1 outline-none transition-all duration-200 dark:bg-gray-dark-2/80 dark:text-white sm:h-14 sm:text-2xl"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="username"
                className="absolute left-0 top-0 flex h-full transform items-center pl-4 font-mono text-lg text-gray-dark-3 transition-all dark:text-gray-light-2"
              >
                Name
              </label>
            </div>
            <div className="relative mt-14">
              <input
                type="email"
                id="name"
                autoComplete="off"
                className="block h-12 w-full rounded-[0.6rem] border-2 border-purple bg-white/80 px-4 font-mono text-xl text-gray-dark-1 outline-none transition-all duration-200 dark:bg-gray-dark-2/80 dark:text-white sm:h-14 sm:text-2xl"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-0 flex h-full transform items-center pl-4 font-mono text-lg text-gray-dark-3 transition-all dark:text-gray-light-2"
              >
                Email
              </label>
            </div>

            <div className="relative mt-14">
              <textarea
                id="message"
                className="block h-auto min-h-[10rem] max-h-[20rem] w-full rounded-[0.6rem] border-2 border-purple bg-white/80 px-4 py-2 font-mono text-xl text-gray-dark-1 outline-none transition-all duration-200 dark:bg-gray-dark-2/80 dark:text-white sm:text-2xl"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-0 flex h-14 transform items-center pl-4 font-mono text-lg text-gray-dark-3 transition-all dark:text-gray-light-2"
              >
                Message
              </label>
            </div>

          {mailerResponse === "success" ? (
              <div className="hidden" aria-hidden="true" />
            ) : null}
        </form>
        <div className="mx-auto mt-9 link">
          <button
            ref={buttonElementRef}
            className={styles.button}
            disabled={
              isSending ||
              formData.username === "" ||
              formData.name === "" ||
              formData.message === ""
            }
            onClick={handleSubmit}
          >
            <span>Send -&gt;</span>
            <span className={styles.success}>
              <svg viewBox="0 0 16 16">
                <polyline points="3.75 9 7 12 13 5"></polyline>
              </svg>
              Sent
            </span>
            <svg className={styles.trails} viewBox="0 0 33 64">
              <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
              <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
            </svg>
            <div className={styles.plane}>
              <div className={styles.left} />
              <div className={styles.right} />
            </div>
          </button>
        </div>
      </div>
      <style jsx global>{`
        input,
        label,
        textarea {
          cursor: none;
        }

        input:hover,
        textarea:hover {
          box-shadow: 0 0 0.3rem #3136ff;
        }

        input:active,
        input:focus,
        textarea:active,
        textarea:focus {
          box-shadow: 0 0 0.3rem #3136ff;
        }

        .dark input:active,
        .dark input:focus,
        .dark textarea:active,
        .dark textarea:focus {
          box-shadow: 0 0 0.3rem #5a5eff;
        }

        input:focus + label,
        input:valid + label {
          height: 50%;
          padding-left: 0;
          transform: translateY(-100%);
        }

        textarea:focus + label,
        textarea:valid + label {
          height: 17%;
          padding-left: 0;
          transform: translateY(-100%);
        }
      `}</style>
    </section>
  );
};

export default Contact;
