// import ViteIntro from "./pages/ViteIntro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
import Layout from "./components/Layout.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponentWithState.tsx";


function App() {

  return (
    <>
        <Layout>
    {/*<ClassComponent/>*/}
    {/*  <FunctionalComponent/>*/}
    {/*  <ArrowFunctionalComponent/>*/}
    {/*    <ArrowFunctionalComponentWithProps title="Is a Arrow Functional Component With Props!"/>*/}
    {/*    <ArrowFunctionalComponentWithPropsType*/}
    {/*        title="Is a Arrow Functional Component With Props!"*/}
    {/*        description="this is a description"/>*/}
    {/*    <ClassComponentWithState/>*/}

            <FunctionalComponent/>


        </Layout>
    </>
  )
}

export default App
