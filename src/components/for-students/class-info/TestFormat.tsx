import FadeUp from "@/components/animation/FadeUp";
import FadeUpNormal from "@/components/animation/FadeUpNormal";
import { H2, H3 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { BookOpen, Headphones, Mic, NotebookPenIcon } from "lucide-react";
import React from "react";

export default function TestFormat() {
  return (
    <div className=" 2xl:container px-4">
      <div className=" space-y-6 ">
        <FadeUp height={10}>
          <h3 className="text-3xl text-center text-primary font-bold">
            {" "}
            TOFEL Classes Test Format
          </h3>
        </FadeUp>

        <FadeUpNormal>
          <p className=" text-sm text-center max-w-xl mx-auto">
            The total test duration is around 4 hours. There are many types of
            questions in the Listening, Reading, Speaking and Writing sections.
          </p>
        </FadeUpNormal>
      </div>
      <div className=" mt-20  grid  sm:grid-cols-2 max-w-sm sm:max-w-2xl mx-auto gap-10">
        {/* READING */}
        <FadeUpNormal delay={0.2}>
          <div className=" h-[30rem] flex flex-col bg-white rounded-lg shadow-lg p-4">
            {/* HEADING PART */}
            <div className=" flex items-start gap-4">
              <BookOpen size={26} className=" text-primary" />
              <div className=" text-primary text-sm mt-0 relative -top-1">
                <h3 className="  font-medium">Reading</h3>
                <p className=" text-xs text-muted-foreground">35 min</p>
              </div>
            </div>
            <hr className="  w-full bg-slate-400  my-2" />
            {/* BOTTOM PART */}
            <section className=" flex flex-col justify-between flex-1">
              <div className=" space-y-4">
                <div>
                  <h2 className=" text-muted-foreground  text-xs">QUESTIONS</h2>
                  <p className=" text-xs">
                    2 Passages- 10 questions from each passage
                  </p>
                </div>
                <div>
                  <h2 className=" text-muted-foreground text-xs">TASKS</h2>
                  <p className=" text-xs">
                    Read passage and respond to questions{" "}
                  </p>
                </div>
              </div>
              <div>
                <Button className=" bg-secondary hover:bg-secondary h-8">
                  View Reading Questions Type
                </Button>
              </div>
            </section>
          </div>
        </FadeUpNormal>
        {/* LISTENING */}
        <FadeUpNormal delay={0.4}>
          <div className=" h-[30rem] flex flex-col bg-white rounded-lg shadow-lg p-4">
            {/* HEADING PART */}
            <div className=" flex items-start gap-4">
              <Headphones size={26} className=" text-primary" />
              <div className=" text-primary text-sm mt-0 relative -top-1">
                <h3 className="  font-medium">Listening</h3>
                <p className=" text-xs text-muted-foreground">36 min</p>
              </div>
            </div>
            <hr className="  w-full bg-slate-400  my-2" />
            {/* BOTTOM PART */}
            <section className=" flex flex-col justify-between flex-1">
              <div className=" space-y-4">
                <div className=" space-y-2">
                  <div>
                    <h2 className=" text-muted-foreground  text-xs">
                      QUESTIONS
                    </h2>
                    <p className=" text-xs">28 questions</p>
                  </div>
                  <div>
                    <ul className=" text-muted-foreground text-xs list-disc pl-2">
                      <li>
                        3 lectures, 3-5 minutes each, some with classroom
                        discussion; 6 questions per lecture
                      </li>
                      <li>
                        2 conversations, 3 minutes each; 5 questions per
                        conversation
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h2 className=" text-muted-foreground text-xs">TASKS</h2>
                  <p className=" text-xs">
                    Read passage and respond to questions{" "}
                  </p>
                </div>
              </div>
              <div>
                <Button className=" bg-secondary hover:bg-secondary h-8">
                  View Reading Questions Type
                </Button>
              </div>
            </section>
          </div>
        </FadeUpNormal>
        {/* Speaking */}
        <FadeUpNormal delay={0.6}>
          <div className=" h-[30rem] flex flex-col bg-white rounded-lg shadow-lg p-4">
            {/* HEADING PART */}
            <div className=" flex items-start gap-4">
              <Mic size={26} className=" text-primary" />
              <div className=" text-primary text-sm mt-0 relative -top-1">
                <h3 className="  font-medium">Speaking</h3>
                <p className=" text-xs text-muted-foreground">17 min</p>
              </div>
            </div>
            <hr className="  w-full bg-slate-400  my-2" />
            {/* BOTTOM PART */}
            <section className=" flex flex-col justify-between flex-1">
              <div className=" space-y-4">
                <div>
                  <h2 className=" text-muted-foreground  text-xs">QUESTIONS</h2>
                  <p className=" text-xs">4 questions</p>
                </div>
                <div>
                  <h2 className=" text-muted-foreground text-xs">TASKS</h2>
                  <p className=" text-xs">
                    Talk about familiar topics and material you read and listen
                    to
                  </p>
                </div>
              </div>
              <div>
                <Button className=" bg-secondary hover:bg-secondary h-8">
                  View Reading Questions Type
                </Button>
              </div>
            </section>
          </div>
        </FadeUpNormal>
        {/* Writing */}
        <FadeUpNormal delay={0.8}>
          <div className=" h-[30rem] flex flex-col bg-white rounded-lg shadow-lg p-4">
            {/* HEADING PART */}
            <div className=" flex items-start gap-4">
              <NotebookPenIcon size={26} className=" text-primary" />
              <div className=" text-primary text-sm mt-0 relative -top-1">
                <h3 className="  font-medium">Writing</h3>
                <p className=" text-xs text-muted-foreground">36 min</p>
              </div>
            </div>
            <hr className="  w-full bg-slate-400  my-2" />
            {/* BOTTOM PART */}
            <section className=" flex flex-col justify-between flex-1">
              <div className=" space-y-4">
                {/* 1ST BLOCK */}
                <div className="  space-y-2">
                  <div>
                    <h2 className="   font-medium  text-xs">
                      INTEGRATED WRITING
                    </h2>
                    <p className=" text-xs">10 min</p>
                  </div>
                  <div>
                    <h2 className=" text-muted-foreground  text-xs">
                      QUESTIONS
                    </h2>
                    <p className=" text-xs">
                      2 Passages- 10 questions from each passage
                    </p>
                  </div>
                  <div>
                    <h2 className=" text-muted-foreground text-xs">TASKS</h2>
                    <p className=" text-xs">
                      Read passage and respond to questions{" "}
                    </p>
                  </div>
                </div>
                <div className=" space-y-2">
                  <div>
                    <h2 className="   font-medium  text-xs">
                      ACADEMIC WRITING
                    </h2>
                    <p className=" text-xs">20 min</p>
                  </div>
                  <div>
                    <h2 className=" text-muted-foreground  text-xs">
                      QUESTIONS
                    </h2>
                    <p className=" text-xs">1 Task</p>
                  </div>
                  <div>
                    <h2 className=" text-muted-foreground text-xs">TASKS</h2>
                    <p className=" text-xs">
                      Read a post by the professor in which she requires of the
                      students to give their opinion. Two students will have
                      responded to the question. Now you write your response. A
                      100 words response is desired but you can go beyond.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Button className=" bg-secondary hover:bg-secondary h-8">
                  View Reading Questions Type
                </Button>
              </div>
            </section>
          </div>
        </FadeUpNormal>
      </div>
    </div>
  );
}
