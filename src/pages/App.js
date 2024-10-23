import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import Button from '../components/Button';
import { api } from '../services/api';
function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id);

      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return
      }
      
    }
    alert("Repositorio não encpntrado")
  }

  const handleRemoveRepo = (id) => {
    // Filtra a lista de repositórios removendo aquele com o id correspondente
    const updateRepos = repos.filter(repo => repo.id !== id);

    // Atualiza o estado com a lista de repositórios atualizada
    setRepos(updateRepos);
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='github-log'/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
      
    </Container>
  );
}

export default App;
