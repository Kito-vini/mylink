
import AsyncStorage from '@react-native-async-storage/async-storage';

//Buscar os links salvos
export async function getLinkSave(key){
    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}

//Salvar um link no storage
export async function saveLink(key, newLink){
    let linksStored = await getLinkSave(key);

    //Se tiver algum link salvo com esse mesmo ID / ou duplicado preciso ignorar.
    const hasLink = linksStored.some(link => link.id === newLink.id);

    if(hasLink){
        console.log('ESSE LINK JÁ EXISTE NA LISTA');
        return;
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored));
    console.log('LINK SALVO COM SUCESSO');
}





//Deletar algum link especifico.
export async function deleteLink(links, id){
    let myLinks = links.filter((item) => {
        return (item.id !== id)
    })
    await AsyncStorage.setItem('sujeitolinks', JSON.stringify(myLinks))

    console.log('LINK DELETADO DO STORAGE');
    return myLinks;
}