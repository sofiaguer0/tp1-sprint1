import './App.css'
import ProfileHeader from './components/ProfileHeader'
import Footer from './components/Footer'
import SkillList from './components/SkillList'

function App() {
  return (
    <div className="min-h-screen w-full bg-bg">
      <ProfileHeader />

      <SkillList />

      <Footer />
    </div>
  )
}

export default App