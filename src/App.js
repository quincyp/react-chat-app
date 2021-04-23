import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="51e42095-efb3-49ce-8e8b-7c8fd830d4d4"
            userName="quincy"
            userSecret="test"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;