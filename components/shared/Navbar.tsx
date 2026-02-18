"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  const pathname = usePathname();

  const navItems = [
    "Home",
    "Courses",
    "Contact Us",
    "Registration Fees",
    "Blog",
    "Gallery",
  ];

  const courseItems = [
    { label: "FMGE Rapid Revision", href: "/fmge-rapid-revision" },
    { label: "FMGE Regular Course", href: "/fmge-regular-course" },
    { label: "FMGE Regular Online Course", href: "/fmge-regular-online-course" },
    { label: "FMGE Semi Regular Course", href: "/fmge-semi-regular-course" },
    { label: "FMGE Semi Regular Online Course", href: "/fmge-semi-regular-online-course" },
    { label: "FMGE Test Discussion Course", href: "/fmge-test-discussion-course" },
    { label: "FMGE Vacational Course", href: "/fmge-vacational-course" },
  ];

  const getHref = (item: string) =>
    item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-white/90 backdrop-blur relative ">

      {/* Jaipur Skyline Background */}
      <div
        className="absolute inset-0 bg-repeat-x bg-bottom opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('/images/rajesthan-bg2.png')",
          backgroundSize: "auto 30px",
        }}
      />

      <nav className="relative max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            {!logoError ? (
              <Image
                src="/arise-logo.png"
                alt="Arise Medical Academy Logo"
                width={150}
                height={50}
                priority
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="text-xl font-bold text-blue-700">ARISE</span>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-black">
            {navItems.map((item) => {
              if (item === "Courses") {
                return (
                  <div key={item} className="relative group">
                    <span className="cursor-pointer flex items-center gap-1 transition hover:text-blue-700">
                      Courses
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    </span>

                    <div
                      className="absolute left-0 top-full mt-2 w-72 rounded-lg bg-white shadow-lg
                      opacity-0 invisible translate-y-2
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      transition-all duration-200"
                    >
                      {courseItems.map((course) => (
                        <Link
                          key={course.label}
                          href={course.href}
                          className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 transition"
                        >
                          {course.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const href = getHref(item);
              const active = isActive(href);

              return (
                <Link
                  key={item}
                  href={href}
                  className={`relative transition ${
                    active ? "text-blue-700 font-semibold" : ""
                  }`}
                >
                  <span>{item}</span>
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 transition-all ${
                      active
                        ? "w-full bg-blue-700"
                        : "w-0 bg-blue-700 hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <Link
              href="/register"
              className="hidden md:block px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-900 transition"
            >
              Register
            </Link>

            {/* Mobile Toggle */}
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="md:hidden rounded-lg p-2 hover:bg-gray-100 transition"
            >
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => {
          setOpen(false);
          setMobileCoursesOpen(false);
        }}
      />

      {/* Mobile Slide Menu */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full hidden"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b">
          {!logoError ? (
            <Image
              src="/arise-logo.png"
              alt="Arise Medical Academy Logo"
              width={120}
              height={40}
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="text-lg font-bold text-blue-700">ARISE</span>
          )}

          <button
            aria-label="Close menu"
            onClick={() => {
              setOpen(false);
              setMobileCoursesOpen(false);
            }}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X />
          </button>
        </div>

        <div className="bg-white/90 flex flex-col gap-2 p-4 font-medium h-screen overflow-y-auto">
          {navItems.map((item) => {
            if (item === "Courses") {
              return (
                <div key={item} className="space-y-1">
                  <button
                    onClick={() =>
                      setMobileCoursesOpen(!mobileCoursesOpen)
                    }
                    className="w-full flex items-center justify-between px-3 py-2 font-semibold text-gray-700 hover:bg-blue-50 rounded-lg transition"
                  >
                    Courses
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        mobileCoursesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileCoursesOpen && (
                    <div className="ml-4 space-y-1">
                      {courseItems.map((course) => (
                        <Link
                          key={course.label}
                          href={course.href}
                          onClick={() => {
                            setOpen(false);
                            setMobileCoursesOpen(false);
                          }}
                          className="block px-3 py-2 rounded-lg text-sm hover:bg-blue-50 hover:text-blue-700 transition"
                        >
                          {course.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            const href = getHref(item);
            const active = isActive(href);

            return (
              <Link
                key={item}
                href={href}
                onClick={() => {
                  setOpen(false);
                  setMobileCoursesOpen(false);
                }}
                className={`px-3 py-2 rounded-lg transition ${
                  active
                    ? "bg-blue-50 text-blue-700 font-semibold"
                    : "hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {item}
              </Link>
            );
          })}

          <Link
            href="/register"
            onClick={() => {
              setOpen(false);
              setMobileCoursesOpen(false);
            }}
            className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-full text-center hover:bg-emerald-700 transition"
          >
            Register
          </Link>
        </div>
      </aside>
    </header>
  );
}
