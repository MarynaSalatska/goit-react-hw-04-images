import { LineWave } from 'react-loader-spinner';
export function Loader() {
 
  return (
    <LineWave
    height="80"
    width="80"
    color="#6a67ce "
    ariaLabel="line-wave-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
    />

  );
}
