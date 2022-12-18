import React from "react";

export function MyHooks({title, id}: { title: string, id?: string} ) {
  // React.useEffect(() => {
  //   console.log('componentDidMount');
  //   console.log('componentWillUpdate')
  // })

  // React.useEffect(() => {
  //   console.log('componentDidMount')
  //   return () => {
  //     console.log('componentWillUnmount')
  //   }
  // }, []);

  // React.useEffect(() => {
  //   console.log('componentWillReceiveProps', title);
  // }, [title]);

  const [isMounted] = useIsMounted();


  React.useEffect(() => {
    console.log('isMounted', isMounted);
  }, [isMounted])

  return (
    <div>{title} {id}</div>
  )
}

function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  return [isMounted]
}
