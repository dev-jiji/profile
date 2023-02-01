import React, { useEffect } from "react";
import Layout from "../common/Layout";
// javascript 코드 자리
const Community = () => {
  // javascript 코드 자리
  // 컴포넌트가 마운트, 업데이트(state변경), 언마운트 시
  // 하고 싶은일을 작성하는 Hook : useEffect
  //   useEffect(()=>{
  // 하고 싶은일
  // 클린업 함수 : 컴포넌트 제거시 실행
  // return ()=>{

  // }
  //   },[의존성 배열:dependency Array])

  useEffect(() => {
    console.log("mount:컴포넌트 생성");
    // axios, html 요소 선택하는 작업 많이했음.
    return () => {
      console.log("unmount:컴포넌트 제거");
    };
  }, []);

  // jsx 코드자리
  //  : 주의사항 return () O
  //  : 주의사항 return {}  X
  return <Layout title={"Community"}>Community</Layout>;
};
// javascript 코드 자리
export default Community;
