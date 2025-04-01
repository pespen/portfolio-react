"use client";

import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="min-h-screen py-20 flex items-center scroll-mt-16"
    >
      <div className="container mx-auto w-[85%]">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-10 text-center">
            {t("projects.title")}
          </h2>

          <div className="max-w-xl mx-auto text-center mt-6">
            <p className="text-md text-gray-700">{t("projects.message")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
