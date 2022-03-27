import Header from "./../components/Header";

export default function Home() {
    return (
        <div>
            <Header />
            <main className="page-about">
                <h2>Home</h2>

                <div className="content">
                    <p>Home Page.</p>
                </div>
            </main>
        </div>
    );
}