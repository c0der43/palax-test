import './styles/App.scss'
import {MainPage} from "@/pages/MainPage";
import {Header} from "@/widgets/Header/ui/Header";

function App() {
  return (
    <>
        <div>
            <Header/>
            <div className='app_content'>
                <MainPage/>
            </div>
        </div>
    </>
  )
}

export default App
