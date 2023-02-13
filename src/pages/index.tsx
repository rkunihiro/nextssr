import { GetServerSidePropsResult } from "next";

interface Props {}

export default function index(): JSX.Element {
    return <div>Hello,World!</div>;
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<Props>> {
    return {
        props: {},
    };
}
