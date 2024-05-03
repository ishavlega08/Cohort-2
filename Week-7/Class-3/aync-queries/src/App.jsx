import { RecoilRoot, useRecoilValue } from "recoil"
import { notificationsAtom, totalNotificationSelector } from "./store/atoms"

function App() {

  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {

  const networkCount = useRecoilValue(notificationsAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  
  return (
    <>
      <button>Home</button>
      
      <button>My Network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
