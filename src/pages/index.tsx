import { ReactElement, FC, Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faker } from "@faker-js/faker";

const HomePages: FC = (): ReactElement => {
  return (
    <div className="flex w-full justify-start gap-x-4">
      <h1>Anjay Mabar</h1>
    </div>
  );
};

export default HomePages;
