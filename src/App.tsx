
import { ThemeContextPovider } from '../ThemeContext'
import { Box } from './Components/Box'

function App() {

  return (
    <>
    <ThemeContextPovider>
      <Box />
    </ThemeContextPovider>
    </>
  )
}

export default App
