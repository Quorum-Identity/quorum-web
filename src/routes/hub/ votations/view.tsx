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
      


      
      return <div className="container">
        <IonIcon onClick={() => navigate('/votations', {replace: true})} style={{cursor: 'pointer',margin: '0rem', fontSize: '2rem'}} name="chevron-back-outline"/>
        <div className="table-white-background" style={{width : '1200px', margin: '20px auto' }}>
            <h1 style={{fontSize: '1.5rem'}}> Pie</h1>
          <Bar data={config.data}    />
          </div>
        

          <div className="table-white-background" style={{width : '1200px', margin: '20px auto' }} >
            <h1 style={{fontSize: '1.5rem'}}> Pie</h1>
            <Line data={line2.data}   />
          </div>


          <div className="table-white-background" style={{width : '1200px', margin: '20px auto' }}>
            <h1 style={{fontSize: '1.5rem'}}> Pie</h1>
            <Line data={line3.data}   />
          </div>
    </div>
}
export default ViewVotation;