"use client";
import React, { useEffect, useState } from 'react';
import styles from "../../css/aboutview.module.css";

interface AnimationProps {
    text: string;
}

function range(start: number, end: number) {
    let array = [];
    for (let i = start; i < end + 1; ++i) {
      array.push(i);
    }
    return array;
}

const TextTypingAni = ({ text }: AnimationProps) => {
    const [sequence1, setSequence1] = useState<string>("");
    const [pointtext1, setPointtext1] = useState<string>("");
    const [sequence2, setSequence2] = useState<string>("");
    const [sequence3, setSequence3] = useState<string>("");
    const [pointtext2, setPointtext2] = useState<string>("");
    const [sequence4, setSequence4] = useState<string>("");
    const [IsBr, SetIsBr] = useState<boolean>(false);

    const [textCount, setTextCount] = useState<number>(0);
    const [isTypingPaused, setIsTypingPaused] = useState<boolean>(false);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (isTypingPaused) {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setIsTypingPaused(false);
                    setTextCount(0);
                    setSequence1("");
                    setPointtext1("");
                    setSequence2("");
                    setSequence3("");
                    setPointtext2("");
                    setSequence4("");
                    SetIsBr(false);
                }, 3000); //몇 초 일시정지할 것인지
                return;
            }

            if (textCount >= text.length) { //text length 초과 시 undefind가 출력되는 것을 방지
                setIsTypingPaused(true);
                return;
            }

            var nextChar = text[textCount];
            const PointColorTextNameIndex = range(18, 29);
            const FROM = range(30, 60);
            const Student = range(62, 97);
            const School = range(98, 111);
            const Suwon = range(112, 120);

            if (PointColorTextNameIndex.includes(textCount)) {
                setPointtext1((prevSequence) => prevSequence + nextChar);
            } else if (FROM.includes(textCount)) {
                setSequence2((prevSequence) => prevSequence + nextChar);
            } else if (Student.includes(textCount)) {
                setSequence3((prevSequence) => prevSequence + nextChar);
            } else if (School.includes(textCount)) {
                setPointtext2((prevSequence) => prevSequence + nextChar);
            } else if (Suwon.includes(textCount)) {
                setSequence4((prevSequence) => prevSequence + nextChar);
            } else {
                setSequence1((prevSequence) => prevSequence + nextChar);
            }

            if (nextChar === "\n") {
                setTextCount((prevCount) => prevCount + 2);
                SetIsBr(true);
            } else {
                setTextCount((prevCount) => prevCount + 1);
            }
        }, 100); // 설정한 초만큼 일정한 간격마다 실행된다

        return () => clearInterval(typingInterval); //컴포넌트가 마운트 해제되거나, 재렌더링 될 때마다 setInterval를 정리하는 함수를 반환함.
    }, [text, textCount, isTypingPaused]); //해당 상태들이 변경될 때마다 useEffect가 다시 실행 됨

    return (
        <>
            <span>{sequence1}</span>
            <span className={styles.PointColor}>{pointtext1}</span>
            <span>{sequence2}</span>
            {
                IsBr ? <br /> : ""
            }
            <span>{sequence3}</span>
            <span className={styles.PointColor}>{pointtext2}</span>
            <span>{sequence4}</span>
        </>
    );
};

export default TextTypingAni;