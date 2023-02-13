import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { useState } from "react";

interface Props {
    text: string;
}

export default function Form(props: Props): JSX.Element {
    const [text, setText] = useState<string>(props.text);
    return (
        <form action="." method="post" encType="application/x-www-form-urlencoded">
            <div>
                <input name="text" type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div>
                <button type="submit">submit</button>
            </div>
        </form>
    );
}

export async function getServerSideProps({ req }: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> {
    const body = await new Promise<string>((resolve) => {
        let buf = "";
        req.on("data", (chunk) => {
            if (chunk) {
                buf += chunk;
            }
        });
        req.on("end", () => {
            resolve(buf);
        });
    });
    const params = new URLSearchParams(body);
    const props: Props = {
        text: params.get("text") ?? "",
    };
    console.log(props);
    return { props };
}
