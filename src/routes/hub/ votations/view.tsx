import IonIcon from "@reacticons/ionicons"
import { useNavigate } from "react-router-dom"
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
  } from 'chart.js';

  import { Bar, Chart, Pie, Line} from 'react-chartjs-2';
import { useRef } from "react";
import Banner from '../../../assets/firstwallpaper.png';

  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
  );



const ViewVotation = () => {
    const navigate = useNavigate();

    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }],
      
    };

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart - Cubic interpolation mode'
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value'
            },
            suggestedMin: -10,
            suggestedMax: 200
          }
        }
      },
    };
   

      //2do

      const line2= {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Chart.js Line Chart - Cubic interpolation mode'
            },
          },
          interaction: {
            intersect: false,
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Value'
              },
              suggestedMin: -10,
              suggestedMax: 200
            }
          }
        },
      };
      

      //3ro

      const line3= {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Chart.js Line Chart - Cubic interpolation mode'
            },
          },
          interaction: {
            intersect: false,
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Value'
              },
              suggestedMin: -10,
              suggestedMax: 200
            }
          }
        },
      };
      


      
      return <div style={{position: 'relative'}}>
        <img style={{opacity: '0.9'}} src='https://cdn.discordapp.com/attachments/1128670410058252369/1128822422674624633/Politicos.png' width='100%'/>
        <div  style={{position: 'absolute', top: '1rem', left: '1rem'}}>
            <IonIcon onClick={() => navigate('/votations', {replace: true})} style={{cursor: 'pointer',margin: '0rem', fontSize: '2rem', color: 'white'}} name="chevron-back-outline"/>
          </div>
        <div style={{margin: '6rem', marginLeft: '2rem'}}>

         <h1 style={{color: 'black'}}>Paso 2023</h1>

          <div className="table-white-background" style={{width : '100%', margin: '20px auto' }}>
              <h1 style={{fontSize: '1.5rem'}}> Pie</h1>
            <Bar data={config.data}    />
            </div>
          

            <div className="table-white-background" style={{width : '100%', margin: '20px auto' }} >
              <h1 style={{fontSize: '1.5rem'}}> Pie</h1>
              <Line data={line2.data}   />
            </div>


            <div className="table-white-background" style={{width : '100%', margin: '20px auto' }}>
              <h1 style={{fontSize: '1.5rem'}}> Pie</h1>
              <Line data={line3.data}   />
            </div>
          </div>
    </div>
}
export default ViewVotation;