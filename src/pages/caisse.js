import { Code, Timer10 } from '@material-ui/icons';
import { Color } from 'ag-grid-community';
import axios from 'axios';
import React, {  useState,useEffect } from 'react';
import Select  from 'react-select';
import { Table,Button,Modal,Dropdown } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Send';
import ImageButton from'react-image-button'
import logo from './logo.png'
export const Caisse =()=>{
const caisse=[String]
var Total=50
const [Articles, setArticles] = useState([]);
const [ID,setId]=useState()
const [Four,setFour]=useState([])
const [RowData, SetRowData] = useState([])
const [Delete,setDelete] = useState(false)
const [val,setVal]=useState()
const [Data, setData] = useState([]);
const [DataFr, setDataFr] = useState([]);
const [Remise, setRemise] = useState();
const [Montant,setMontant]=useState(0)
const [CAR, setCAR] = useState("");


var Montantblabla;
//const Date =`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`
const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;

var idtest=''
var CodeA=''
const [Description,setDescription]=useState()
const [ScreenSize,setScreenSize]=useState(0)

const [QuantitéVN, setQuantitéVN] = useState("");
const [TotalM, setTotalM] = useState(0);
const [CodeArticle, setCodeArticle] = useState("");
const [Fournisseur, setFournisseur] = useState("Select Fournisseur");
const [Prix,setPrix]=useState("")
const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    const [ViewARTShow, SetViewARTShow] = useState(false)
    const handleARTViewShow = () => { SetViewARTShow(true) }
    const hanldeViewARTClose = () => { SetViewARTShow(false) }
    const [ViewQnt, SetQnt] = useState(false)
    const handleQnt = () => { SetQnt(true) }
    const hanldeQntClose = () => { SetQnt(false) }
    const [ViewListFour, SetListFour] = useState(false)
    const handleListFour = () => { SetListFour(true) }
    const hanldeListFourClose = () => { SetListFour(false) }
    const [ViewRetourA, SetRetourA] = useState(false)
    const handleRetourA = () => { SetRetourA(true) }
    const hanldeRetourAClose = () => { SetRetourA(false) }

/***************************************************************************************/
    /* const EditQuantité = async()=>{
        const Total= async()=>{
            /* for (let i = 0; i < Data.length-1; i++) {
                 // setTotalM(parseFloat(Data[i].Prix)+parseFloat(Data[i].Prix))  
                 setMontant(parseFloat(Montant)+parseFloat(Data[i].Prix))
                  console.log("TOTAL",Data[i].QuantitéVN)}
              await   Data.forEach(element => {
                     Montantblabla = (parseFloat(parseFloat(Montantblabla)+parseFloat(element.Prix)))
                     console.log("TOTAL foreach",Montantblabla)})
         
         }
        const url2 = 'http://169.254.131.15:5001/Edit'
        const Credentials = {QuantitéVN}
       await axios.put(url2, Credentials)
.then(response => {
    const result = response.data;
    const { status, message, data } = result;
    
    })
    handleDeleteCaisse()
    }*/
    const GetArticles = () => {
        //here we will get all employee data
        const url = 'http://169.254.131.15:5001/Article'
        axios.get(url)
            .then(response => {
                setData(response.data)
                    console.log(Data)
                
            })
            .catch(err => {
                console.log(err)
            })
        }
    function GetArticlebyid ()  {
        //here we will get all employee data
        const url = `http://169.254.131.15:5001/Articlebyid/${idtest}`
        axios.get(url)
            .then(response => {
                CodeA=response.data.CodeArticle
               GetFournisseurData()
            })
           
        }
        function GetFournisseurData  ()  {
            //here we will get all employee data
            const url = `http://169.254.131.15:5001/Fournisseur/`+CodeA
            axios.get(url)
                .then(response => {
                    const result = response.data;
                    setFour(result)
                        console.log('url is ',url)
                        console.log('car in req',CAR)
                    console.log('Fournisseur called')
                    setCodeArticle(result.CodeArticle)
                   
                        
                    
                })
                .catch(err => {
                    console.log(err)
                })
                
        }
     /***************************************************************************************/
     const ADDArch = async()=>{
        const url2 = 'http://169.254.131.15:5001/Archive'
        const Credentials = {Data,date}
       await axios.post(url2, Credentials)
.then(response => {
    const result = response.data;
    const { status, message, data } = result;
    
    })
    handleDeleteCaisse()
    }
    /***************************************************************************************/
     const GETDESC=()=>{
            const urlA = `http://169.254.131.15:5001/Article/${CodeArticle}`   
            console.log("url description",urlA)
    axios.get(urlA)
      .then(response => {
          const result = response.data;
          setDescription(result.Description)
          console.log("Desription",Description)
          
          
      })}
      /***************************************************************************************/
      const ADD = async()=>{
        const url2 = 'http://169.254.131.15:5001/add_CAISSE'
        const Credentials = {CodeArticle,Description, Fournisseur, Prix,QuantitéVN}
      await  axios.post(url2, Credentials)
.then(response => {
    const result = response.data;
    const { status, message, data } = result;
    
    })
    }
    /******************************************************************************************/
const GetPrix = () => {
       const url = `http://169.254.131.15:5001/CAISSE/${CodeArticle}/${Fournisseur}`  
       console.log("Prix url",url) 
      axios.get(url)
        .then(response => {
            const result = response.data;
            console.log("DATA Fournisseur",response.data)
            setPrix(response.data.PrixVente)
                console.log("prix",Prix)  
        })    
}
/****************************************************************************************************/
const GetDataBS = async () => {
    const urlg = 'http://169.254.131.15:5001/CAISSE'
   await  axios.get(urlg)
    .then(response => {
        const result = response.data;
        setData(result)                    
           // window.location.reload()
           console.log("data Caisse",Data)
    })
   
   
}

     /*********************************************************************************************/   
     const Getfour = async () => {
        const urlg = `http://169.254.131.15:5001/Fournisseur/`+CodeArticle
       await  axios.get(urlg)
        .then(response => {
            const result = response.data;
            setDataFr(result)                    
               // window.location.reload()
               console.log("data Four",DataFr)
        })
       
       
    }
    /******************************************************************************************************  */   
    /****************************************************************************************************** */
const Calc_Total=()=>{
   for (let index = 0; index < Articles.length; index++) {
    const element = Articles[index];
    Total=Total+parseFloat(element[3])*parseInt(element[4])
     console.log("Total",Total)
   }
   setMontant(Total)
   handleViewShow()

}
/****************************************************************************************** */
const Click = async()=>{
    console.log(CodeArticle)
    console.log(Fournisseur)
    //GetFRData()
    //GETDESC()
    //Articles.push([CodeArticle,Fournisseur,Description,Prix,QuantitéVN])
        
    //ADD(GetDataBS())
    //GetDataBS()
   // Total()
   //setVal()
}
/*useEffect(() => {
    GetFRData()
    GETDESC()
    GetDataBS()
    GetDataBS()
    GetDataBS()
    GetDataBS()
    GetDataBS()
    Total()
}, [])*/
const handleDeleteCaisse = () =>{
    const url = `http://169.254.131.15:5001/CAISSEDELETE`
    axios.delete(url)
        .then(response => {
            const result = response.data;
            const { status, message } = result;
        })
        .catch(err => {
            console.log(err)
        })
}
/****************************************************************************************************************/
const handleDelete = () =>{
    const url = `http://169.254.131.15:5001/Supp_Article_Caisse/${ID}`
    axios.delete(url)
        .then(response => {
            const result = response.data;
            const { status, message } = result;
        })
        GetDataBS()
}
/****************************************************************************************************************/
/*useEffect(() => {
    console.log(CodeArticle);
    Getfour();
  }, [CodeArticle]);*/
  useEffect(() => {
    GetArticles();
    setScreenSize(window.innerHeight)

   // GetFournisseurData()
}, [])

return(
    <div className='table-responsive' style={{height:"100vh",overflow:"auto"}}>
         
         <table className='table table-striped table-hover table-bordered' style={{overflow:'auto',height:"100vh"}}>
    <tr >
        <td>
    <table className='table table-striped table-hover table-bordered'style={{backgroundColor:"#E5E5E5"}}>
         <tbody style={{'height': "70vh" , 'overflow':'scroll', 'display': 'block'}}>

                        <thead>
                        
                            <tr>
                           
                               <th><b>Code Article</b></th>
                                <th><b>fournisseur</b></th>
                                <th><b>Description</b></th>
                                <th style={{'width': '122px'}}><b>Prix</b> </th>
                                <th style={{'width': '122px'}}><b>Quantité</b></th>
                                <th>Remise</th>
                            </tr>
                        </thead>
                        
                   <tbody>

                            {Articles?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    <td>{item[3]}</td>
                                    <td>{item[4]}</td>
                                    <td>{item[5]} %</td>
                                    
                                
                            
                                    <td> <Button size='sm' variant='danger' onClick={() => {handleDelete(setId(item._id))}}>Delete</Button></td>
                                    
                                   
                                </tr>
                                
                            )}
                        </tbody>
                       </tbody> 
                    </table>
                    <p style={{color:'black',fontSize:"77px",marginLeft:"200px",fontFamily:"Brush Script MT",fontWeight:"bold"}}>T.E.A</p>
                    <b style={{marginLeft:"200px"}}>Touihri Equipement Auto</b>
                    </td>
                    <td align='center' >
                    <table>
 <tr style={{'height': '5px'}} >
      <td width={'600px'} >
    <input type="text" className='form-control' style={{backgroundColor:"#C2C2C2"}}placeholder='Code Article' value={CodeArticle} onChange={(e) => setCodeArticle(e.target.value)+GETDESC()}/></td>
    </tr>
    
    <tr >
      <td><input type="number" className='form-control'style={{backgroundColor:"#C2C2C2"}} placeholder='Quantité ' 
      placeholderTextColor="black" value={QuantitéVN} onChange={(e) => setQuantitéVN(e.target.value)+GETDESC()+Getfour()}/></td>
    </tr>
    <tr >
      <td>
      <div className="form-group">
    <strong>{DataFr.Fournisseur}</strong>
    <select style={{backgroundColor:"#C2C2C2",width:"600px",height:'38px'}}
     name="{DataFr.name}"
     onChange={(e)=>setFournisseur(e.target.value)+GetPrix()}
    
    >
      <option defaultValue={Fournisseur}>{Fournisseur} </option>
      {DataFr.map((item, index) => (
        <option key={index} value={item.id}>
          {item.fournisseur}
        </option>
      ))}
    </select>
  </div>
  {console.log(Fournisseur)}
  </td>
    </tr>
    <tr >
      <td><input type="text" className='form-control'style={{backgroundColor:"#C2C2C2"}} placeholder='Remise % 'value={Remise} onChange={(e) => setRemise(e.target.value)+GetDataBS()+GetPrix()} /></td>
    </tr>
                        
                    </table>
                    
                    
                   <Button style={{marginLeft:'20px',width:"100px",height:"100px"}} variant='secondary' onClick={() => GetPrix()+setCodeArticle("")+setQuantitéVN("")+setFournisseur("Select Fournisseur")+setRemise("")+Articles.push([CodeArticle,Fournisseur,Description,Prix,QuantitéVN,Remise])}>
                   <b style={{color:'black'}}> Ajouter </b>
                    </Button>
                   
                    <Button style={{marginLeft:'20px',width:"100px",height:"100px"}} variant='primary' onClick={() => {handleARTViewShow()}}>
                    <b style={{color:'black'}}>Articles</b>
                    </Button>
                    <Button style={{marginLeft:'20px',width:"125px",height:"100px"}} variant='warning' onClick={() => {handleRetourA()}}>
                  <b style={{color:'black'}}>Retour Article</b>
                    </Button><br></br>
                    <Button style={{marginLeft:'30px',width:"365px",height:"100px",marginTop:"25px"}} variant='success' onClick={() => {Calc_Total()}}><i className='fa fa-plu'></i>
                    PAYER
                    </Button>
                   
                    
                    <br/>
                   
                    
                    </td>

    </tr>
    
   
</table>

<div className='model-box-view'>
<Modal
    show={ViewShow}
    onHide={hanldeViewClose}
    backdrop="static"
    keyboard={false}>
    <Modal.Header closeButton>
        <Modal.Title>Payment</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div>
        <div className='form-group'>
           <input type="text" className='form-control' onChange={(a) => CodeArticle=(a.target.value)} placeholder="Code Client" />
        </div>

            <b>Payment par :</b>        
     <div>
        <input type="radio" value="Espéce" name="gender" style={{marginLeft:"20px"}}/> <b>Espéce </b>
     <input type="radio" value="cheque" name="gender" style={{marginLeft:"20px"}}/> <b>Chèque</b>

      </div >
      <br/>

      <b>Numéro Chèque</b>
      <div className='form-group'>
                                <input type="text" className='form-control' onChange={(a) => CodeArticle=(a.target.value)} placeholder="Numéro chèque" />
                                </div>
        <b>MONTANT</b>
     <div className='form-group'>
                                <input type="text" className='form-control'  Value={Montant} placeholder="Montant" readOnly/>
                                </div>

            <Button type='submit' className='btn btn-success mt-4' onClick={()=>ADDArch()}>Payer</Button>

        </div>
    </Modal.Body>
    <Modal.Footer>
        <Button variant='secondary' onClick={hanldeViewClose}>Close</Button>
    </Modal.Footer>
</Modal>
</div>

   <div className='model-box-view'>
    <Modal
    show={ViewARTShow}
    onHide={hanldeViewARTClose}
    backdrop="static"
    size='lg'
    keyboard={false}>
    <Modal.Header closeButton>
        <Modal.Title>Liste Article</Modal.Title>
    </Modal.Header>
    <Modal.Body>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th >Code Article</th>
                                <th >Description</th>
                                <th>Quantité Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data?.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.CodeArticle}</td>
                                    <td>{item.Description}</td>
                                 
                                    <td> <Button id='aj' size='sm' variant='dark'
                                     onClick={()=> {handleQnt( SetRowData(item),idtest=item._id,console.log('id',idtest),GetArticlebyid())}}>
                                         Afficher </Button></td>
                                      
                                   


                                   
                                    
                                </tr>
                            )}
                        </tbody>
                        
                    </table>
                   
                </div>
    </Modal.Body>
    <Modal.Footer>
        <Button variant='secondary' onClick={hanldeViewARTClose}>Close</Button>
    </Modal.Footer>
     </Modal>
   </div>        
   <div className='model-box-view'>
    <Modal
    show={ViewQnt}
    onHide={hanldeQntClose}
    backdrop="static"
    size='lg'
    keyboard={false}>
    <Modal.Header closeButton>
        <Modal.Title>Liste Article</Modal.Title>
    </Modal.Header>
    <Modal.Body>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                    <thead>
                            <tr>
                                <th>Fournisseur</th>
                                <th>Quantité</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Four.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.fournisseur}</td>
                                    <td>{item.Qnt}</td>
                               </tr>
                            )}
                        </tbody>
                        
                    </table>
                   
                </div>
    </Modal.Body>
    <Modal.Footer>
        <Button variant='secondary' onClick={hanldeQntClose}>Close</Button>
    </Modal.Footer>
     </Modal>
   </div>        


                
   <div className='model-box-view'>
                <Modal
                    show={ViewRetourA}
                    onHide={hanldeRetourAClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Retour Article</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <b>Code Article</b>
      <div className='form-group'>
                                <input type="text" className='form-control' onChange={(a) => CodeArticle=(a.target.value)} placeholder="Code Article" />
                                </div>
                                <b>Fournisseur</b>
      <div className='form-group'>
                                <input type="text" className='form-control' onChange={(a) => CodeArticle=(a.target.value)} placeholder="Fournisseur" />
                                </div>
                                <b>Quantité</b>
      <div className='form-group'>
                                <input type="text" className='form-control' onChange={(a) => CodeArticle=(a.target.value)} placeholder="Quantité" />
                                </div>
                                <br></br>
                                <Button id='aj' size='sm' variant='dark'>
                                         Confirmer</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    

                        <Button variant='secondary' onClick={hanldeRetourAClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                       
                </div>
  </div> 



               




)
}
