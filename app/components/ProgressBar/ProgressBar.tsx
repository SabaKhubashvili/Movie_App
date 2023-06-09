import { Container } from "@/app/Container";
import { MotionValue, useSpring,motion } from "framer-motion";

export function ProgressBar({ value }: { value: MotionValue<number> }) {
    const width = useSpring(value, { damping: 20 });
    return (
        <motion.div className="flex  w-full flex-row items-start justify-start fixed  bg-neutral-900/70 h-full inset-0 z-[99]">
            <Container>

                <motion.div
                    className="h-6 w-full bg-green-500 mt-[20rem] rounded-lg"
                    style={{ scaleX: width, originX: 0 }}
                    transition={{ ease: 'easeIn' }}
                    />
            </Container>
        </motion.div>
    );
}