import Layout from "./layout";
import Time from "./time";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Time />
      <h1>IoT 2023 Project</h1>
      <p>This is the content of the homepage.</p>
    </Layout>
  );
};

export default HomePage;
