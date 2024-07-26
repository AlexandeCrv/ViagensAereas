import React, { Children, useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

import { Await, Link } from "react-router-dom";
import Modal from "react-modal";
Modal.setAppElement("#root");

import decolar from "./assets/decolar.png";
import pousar from "./assets/pousar.png";
import axios from "axios";
import logo from "./assets/logo2.png";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import kami from "./assets/kami.png";
import aspas from "./assets/aspas.png";
import camila from "./assets/camila.jpeg";
import leal from "./assets/leal.png";
import git from "./assets/linke.png";
import linke from "./assets/git.png";
import perfil from "./assets/perfil.png";
import tieli from "./assets/tieli.png";
import karim from "./assets/karim.png";
import guga from "./assets/guga.png";
import visa from "./assets/visa.png";
import opera from "./assets/opera.png";
import olho from "./assets/olho.png";
import estrela from "./assets/estrela.png";
import olhooff from "./assets/olhooff.png";
import "./Home.css";
export const Home = () => {
  const [lugares, setLugares] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenMO, setIsOpenMO] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [loading, setLoading] = useState(false);
  const conf = () => setLoading(!loading);
  const [infants, setInfants] = useState(0);
  const [classe, setclasse] = useState("");
  const [isPassengerSelectorOpen, setPassengerSelectorOpen] = useState(false);
  const mudaolho = () => setIsShow(!isShow);
  const mudaolhoo = () => setIsShow2(!isShow2);
  const [isShow, setIsShow] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState("");
  const [selectedAirportdestino, setSelectedAirportdestino] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [price, setPrice] = useState([]);

  const closeSelector = () => {
    setPassengerSelectorOpen(false);
  };
  const selectabrir = () => {
    setPassengerSelectorOpen(!isPassengerSelectorOpen);
  };
  function Openmodal() {
    setIsOpen(!modalIsOpen);
  }
  function Closemodal() {
    setIsOpen(false);
  }

  function ClosemodalMO() {
    setIsOpenMO(false);
  }
  const formatDate = (date) => {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
  };

  const comentarios = [
    {
      nome: "Camila Peixoto",
      Destino: "Rio de janeiro",
      coment: "Amei a viagem e o conforto, vi o show do Bruno Mars!",
      foto: camila,
      estrela: estrela,
    },
    {
      nome: "Leal PrimeiraMente",
      Destino: "São Paulo",
      coment:
        "Viagem muito boa, fámilia, recomendo a todo mundo que queira qualidade!",
      foto: leal,
      estrela: estrela,
    },
    {
      nome: "Kami da PainGaiming",
      Destino: "Nordeste",
      coment: " Voo meio conturbado, muitao turbulencia, deus no comando!",
      foto: kami,
      estrela: estrela,
    },
    {
      nome: "Karim e mariclara ",
      Destino: "Bora Bora",
      coment: " Viajei com minha esposa, foi um tempo incrivel, saudades",
      foto: karim,
      estrela: estrela,
    },
    {
      nome: "Mãe da Sofi ",
      Destino: "Barcelona",
      coment: "Amei voar com a tielis&bibiustrasportation!",
      foto: tieli,
      estrela: estrela,
    },
    {
      nome: "Ramatchopi ",
      Destino: "Eunapolis",
      coment: " Amei a viagem, usei o cupom bibiu20 e ganhei desconto!!",
      foto: guga,
      estrela: estrela,
    },
  ];
  const op = [
    {
      nome: "ECONOMY",
    },
    {
      nome: "FIRST",
    },
  ];

  const getAccessToken = async () => {
    const client_id = "Tsxv8jWaF5v3ScSiV5xNzffxexZ5Qkj8";
    const client_secret = "FoKZOZhOlOXsurWg";

    try {
      const response = await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        {
          grant_type: "client_credentials",
          client_id,
          client_secret,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      return response.data.access_token;
    } catch (error) {
      console.error("Error getting access token:", error);
    }
  };

  const getLugares = async () => {
    const token = await getAccessToken();
    if (!token) return;

    try {
      const response = await axios.get(
        "https://test.api.amadeus.com/v1/reference-data/locations",
        {
          params: {
            subType: "AIRPORT",
            keyword: "US",
            "page[limit]": 300,
          },

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response.data;

      setLugares(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLugares();
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "-20px",
      duration: 2000,
      delay: 200,
      reset: false,
    });
    sr.reveal(".cimaheader", { interval: 500 });
    sr.reveal(".h1pcimageader", { interval: 500 });
    sr.reveal(".h1pconteinarcimaheader", { interval: 500 });
    sr.reveal(".body1img", { interval: 500 });
    sr.reveal(".body1p", { interval: 500 });
    sr.reveal(".encimadooption", { interval: 400 });
    sr.reveal(".body1img", { interval: 500 });
    sr.reveal(".body1imgs", { interval: 500 });
    sr.reveal(".body1h2p", { interval: 500 });
    sr.reveal(".paragbordervibody1", { interval: 500 });
    sr.reveal(".body2conteiners", { interval: 500 });
    sr.reveal(".body2h1", { interval: 500 });
    sr.reveal(".paragdestino", { interval: 500 });

    sr.reveal(".body3divh1", { interval: 500 });
    sr.reveal(".body3divppm", { interval: 500 });
    sr.reveal(".body3fotos", { interval: 500 });
    sr.reveal(".body3btnpacotes1", { interval: 500 });
    sr.reveal(".body3btnpacotes2", { interval: 500 });
    sr.reveal(".body3btnpacotes3", { interval: 500 });
  }, []);

  const conferirsetatudoselecionado = () => {
    if (
      !selectedAirportdestino ||
      !selectedAirport ||
      !checkInDate ||
      !checkOutDate ||
      !classe
    ) {
      alert("Selecione os destinos e datas antes de comprar.");
    } else {
      setIsOpenMO(true);
    }
  };
  const handleSearchPackages = async () => {
    const token = await getAccessToken();
    if (!token) return;

    try {
      const response = await axios.get(
        "https://test.api.amadeus.com/v2/shopping/flight-offers",
        {
          params: {
            originLocationCode: selectedAirport,
            destinationLocationCode: selectedAirportdestino,
            departureDate: checkInDate,
            returnDate: checkOutDate,
            adults: adults,
            children: children,
            infants: infants,
            travelClass: classe,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response.data;
      setPrice(data);
      console.log(price);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  const tresfuncao = () => {
    conferirsetatudoselecionado();
    handleSearchPackages();
    conf();
  };

  const formatDuration = (duration) => {
    const match = duration.match(/PT(\d+)H(\d+)M/);
    if (match) {
      const hours = parseInt(match[1], 10);
      const minutes = parseInt(match[2], 10);
      return `${hours} horas ${minutes} minutos`;
    }
  };
  return (
    <div>
      <header>
        <div className="cimaheader">
          <img className="logo" src={logo} alt="" />
          <div className="botoesheader">
            <button onClick={Openmodal} className="loguin">
              Registrar
            </button>
            <Modal
              className="modal"
              isOpen={modalIsOpen}
              onRequestClose={Closemodal}
              contentLabel="Example Modal"
              overlayClassName="modal-overlay"
            >
              <div className="modalbtnlogo">
                <div className="modalbtn">
                  <button className="btnmodal" onClick={Closemodal}>
                    X
                  </button>
                </div>
                <img className="logomodal" src={logo} alt="" />
              </div>
              <div className="modalmain">
                <div className="modaldivh1p">
                  <h1 className="h1modal">Bem vindo!</h1>
                  <p>Por favor selecione um provedor para criar sua conta</p>
                </div>
                <div className="modallogiunopions">
                  <a
                    target="blank_"
                    href="https://www.linkedin.com/in/alexandre-carvalho-4b178a26b/"
                  >
                    <button className="modalbtnloguin">
                      <img className="modalloguinfoto" src={git} alt="" />
                    </button>
                  </a>
                  <a target="blank_" href="">
                    <button className="modalbtnloguin">
                      <img className="modalloguinfoto" src={opera} alt="" />
                    </button>
                  </a>
                  <a target="blank_" href="https://github.com/AlexandeCrv">
                    <button className="modalbtnloguin">
                      <img className="modalloguinfoto" src={linke} alt="" />
                    </button>
                  </a>
                </div>
                <div className="divider">ou</div>
                <div className="divformmodal">
                  <form action="">
                    <p>Nome completo</p>
                    <input
                      className="inputextmodal"
                      placeholder="Coloque seu nome completo aqui..."
                      type="text"
                    />
                    <p>Email</p>
                    <input
                      className="inputextmodal"
                      placeholder="Coloque seu email aqui..."
                      type="email"
                    />
                    <p>Senha</p>
                    <div className="divsenha">
                      <input
                        className="inputextmodal"
                        placeholder="***********"
                        type={isShow ? "text" : "password"}
                      />
                      <label onClick={mudaolho} className="olho">
                        {!isShow && <img src={olho} alt="" />}
                        {isShow && <img src={olhooff} alt="" />}
                      </label>
                    </div>
                    <p>Confirme sua senha</p>
                    <div className="divsenha">
                      <input
                        className="inputextmodal"
                        placeholder="***********"
                        type={isShow2 ? "text" : "password"}
                      />
                      <label onClick={mudaolhoo} className="olho">
                        {!isShow2 && <img src={olho} alt="" />}
                        {isShow2 && <img src={olhooff} alt="" />}
                      </label>
                    </div>
                  </form>
                  <div className="checkboxPdiv">
                    <div className="checkboxdiv1">
                      <input
                        className="checkbox"
                        type="checkbox"
                        name="checkbox"
                        value="checkbox"
                        id="checkbox"
                      />
                      <label htmlFor="checkbox">
                        Aceito os termos e condições da plataforma.
                      </label>
                    </div>
                    <div className="checkboxdiv1">
                      <input
                        className="checkbox"
                        type="checkbox"
                        name=""
                        id="checkbox2"
                      />
                      <label htmlFor="checkbox2">Manter-me conectado.</label>
                    </div>
                  </div>
                  <div className="divregistrar">
                    <button className="registrar"> Registrar</button>
                    <p className="jaecasdastrado">
                      Ja é cadastrado?
                      <strong className="storngmodal"> Fazer Loguin</strong>
                    </p>
                  </div>
                </div>
              </div>
            </Modal>
            <div>
              <Link to={"/Profile"}>
                <img className="perfilfoto" src={perfil} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="h1pcimageader">
          <h1>Oferecemos os melhores pacotes de viagens para suas férias</h1>
          <p>
            A agencia de viagens GreedIsland Final oferece serviços
            personalizados para quem busca destinos incriveis e diferenciados,
            os melhores preços e o melhor atendimento do país!!
          </p>
        </div>
        <div className="encimadooption">
          <h3 className="destinoescrito">Destino</h3>
        </div>
        <div className="h1pconteinarcimaheader">
          <div className="paragdestino">
            <p>Partida</p>
            <select
              className="passageirosbotaobonitopassageiros"
              value={selectedAirport}
              onChange={(e) => setSelectedAirport(e.target.value)}
            >
              <option value="">Selecione um aeroporto</option>

              {lugares.map((lugar) => (
                <option key={lugar.id} value={lugar.iataCode}>
                  {lugar.name} ({lugar.iataCode}) - {lugar.address.cityName}
                </option>
              ))}
            </select>
          </div>
          <div className="paragdestino">
            <p>Destino</p>
            <select
              className="passageirosbotaobonitopassageiros"
              value={selectedAirportdestino}
              onChange={(e) => setSelectedAirportdestino(e.target.value)}
            >
              <option value="">Selecione um aeroporto</option>

              {lugares.map((lugar) => (
                <option key={lugar.id} value={lugar.iataCode}>
                  {lugar.name} ({lugar.iataCode}) - {lugar.address.cityName}
                </option>
              ))}
            </select>
          </div>

          <div className="paragdestino">
            <p>Check-in</p>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div className="paragdestino">
            <p>Check-out</p>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
          <div className="paragdestino">
            <p>Qual a classe?</p>
            <select
              value={classe}
              className="class"
              onChange={(e) => setclasse(e.target.value)}
            >
              <option value="">Escolha a classe</option>
              {op.map((opi) => (
                <option>{opi.nome}</option>
              ))}
            </select>
          </div>
          <div className="paragdestino">
            <p>N/de passageiros</p>

            <div className="passageirosbotaobonito" onClick={selectabrir}>
              {adults + children + infants} Passageiro
              {adults + children + infants > 1 ? "s" : ""}
            </div>
            {isPassengerSelectorOpen && (
              <div className="passenger-selector">
                <button className="close-button" onClick={closeSelector}>
                  X
                </button>
                <h3>Passageiros</h3>
                <div className="passenger-category">
                  <span>Adultos (acima de 12 anos)</span>
                  <button
                    onClick={() => setAdults(adults > 1 ? adults - 1 : 1)}
                  >
                    -
                  </button>
                  <span>{adults}</span>
                  <button onClick={() => setAdults(adults + 1)}>+</button>
                </div>
                <div className="passenger-category">
                  <span>Crianças (de 2 a 11 anos)</span>
                  <button
                    onClick={() => setChildren(children > 0 ? children - 1 : 0)}
                  >
                    -
                  </button>
                  <span>{children}</span>
                  <button onClick={() => setChildren(children + 1)}>+</button>
                </div>
                <div className="passenger-category">
                  <span>Bebês (até 1 ano e 11 meses)</span>
                  <button
                    onClick={() => setInfants(infants > 0 ? infants - 1 : 0)}
                  >
                    -
                  </button>
                  <span>{infants}</span>
                  <button
                    onClick={() =>
                      setInfants(infants < adults ? infants + 1 : infants)
                    }
                  >
                    +
                  </button>
                </div>
                <p className="infant-warning">
                  O número de bebês deve ser menor ou igual ao número de adultos
                  e eles podem acarretar taxas adicionais por parte da cia aérea
                  em voos internacionais.
                </p>
              </div>
            )}
          </div>
          <div className="divbtndestino">
            <button className="btndestino" onClick={tresfuncao}>
              Procurar pacotes
            </button>
          </div>
        </div>

        {modalIsOpenMO && (
          <div>
            <Modal
              className="modalmo"
              isOpen={modalIsOpenMO}
              onRequestClose={ClosemodalMO}
              contentLabel="Example Modal"
              overlayClassName="modal-overlay"
            >
              <div className="tudao">
                <div>
                  <div className="topomodalmelhoroferta">
                    <button className="btnmodal" onClick={ClosemodalMO}>
                      X
                    </button>
                    <div className="divimgmodalmlehoroferta">
                      {" "}
                      <img
                        className="logomodalmelhoroferta"
                        src={logo}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="modalmotudo">
                    <p className="latam">
                      <strong> Ida (Latam)</strong> <br />
                      Classe {classe}
                    </p>
                    <div className="coisamodalmo">
                      <div className="modalmocheckin">
                        <p>
                          <strong>{selectedAirport}</strong>
                        </p>
                        <p className="datamodal">{formatDate(checkInDate)} </p>
                        <div>
                          <img src={decolar} alt="" />
                        </div>
                      </div>
                      <div className="dividermo">
                        <p className="tempo">
                          {loading
                            ? "Conferindo tempo..."
                            : price.length > 0
                            ? formatDuration(price[0].itineraries[0].duration)
                            : ""}
                        </p>

                        <hr />
                      </div>
                      <div className="npassageiros">
                        {" "}
                        {adults + children + infants} Passageiro
                        {adults + children + infants > 1 ? "s" : ""}
                      </div>

                      <div className="modalmocheckinout">
                        <p>
                          <strong>{selectedAirportdestino}</strong>
                        </p>
                        <p className="datamodal">{formatDate(checkOutDate)} </p>
                        <div>
                          <img src={pousar} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ladodepreço">
                  <div className="total">
                    <div className="divmelhorofertastrong">
                      <strong>MELHOR OFERTA!</strong>
                    </div>

                    <div className="a">
                      <h4> Total: </h4>
                      <p className="preçodapassagem">
                        {loading
                          ? "Conferindo Valor..."
                          : price.length > 0
                          ? price[0].price.total
                          : " Valor indisp. "}{" "}
                        $$
                      </p>
                    </div>
                    <div>
                      <button className="btnmodalcomprar">Comprar</button>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        )}
      </header>
      <div className="body1">
        <div className="body1h1p">
          <div className="body1td">
            <h1>Escolha os melhores destinos na melhor agencia</h1>
            <div className="body1p">
              <p>
                Com nossa agencia de viagens vc pode explorar o mundo todo de
                forma rapida barata e segura, oferecemos pacotes personalizados
                com destinos exoticos, praias muito paradisiacas, cidades
                historicas e muito mais.
              </p>
            </div>
          </div>
          <div className="body1h2p">
            <h2>Destinos mais procurados</h2>
            <div className="body1pcidades">
              <p>
                <strong className="china"> China </strong>
              </p>
              <p>
                <strong className="china"> Moscow </strong>
              </p>
              <p>
                <strong className="chinaa"> Nova york </strong>
              </p>
              <p>
                <strong className="china"> Tokyo </strong>
              </p>
              <p>
                <strong className="china"> Seul </strong>
              </p>
              <p>
                <strong className="china"> Alaska </strong>
              </p>
              <p>
                <strong className="china"> Paris </strong>
              </p>
              <p>
                <strong className="china"> Suiça </strong>
              </p>
              <p>
                <strong className="china"> Rio de Janeiro </strong>
              </p>
              <p>
                <strong className="china"> Santiago </strong>
              </p>
            </div>
          </div>
        </div>

        <img className="body1img" src={img1} alt="" />

        <div className="body1imgs">
          <div className="body1zoomimg">
            <img className="body1imgg" src={img2} alt="" />
          </div>
          <div className="body1zoomimgg">
            <img className="body1imggg" src={img3} alt="" />
          </div>
        </div>
      </div>
      <div className="body2">
        <div className="body2divh1">
          <h1 className="body2h1">
            Veja o que nossos clientes dizem sobre noss serviço!
          </h1>
        </div>
        <div className="map">
          {comentarios.map((come) => (
            <div className="body2conteiners">
              <div className="body2cont">
                <div className="body2contdentro">
                  <div className="body2imgnome">
                    <div>
                      <img className="body2img" src={come.foto} alt="" />
                    </div>
                    <div className="nome">
                      <h4>{come.nome}</h4>
                      <p className="body2destino">Destino: {come.Destino} </p>
                    </div>
                  </div>
                  <div className="aspas">
                    <img src={aspas} alt="" />
                  </div>
                  <div className="body2comentario">
                    <p className="body2coment">{come.coment}</p>
                    <div className="estrela">
                      <img src={estrela} alt="" />
                      <img src={come.estrela} alt="" />
                      <img src={come.estrela} alt="" />
                      <img src={come.estrela} alt="" />
                      <img src={estrela} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="body3">
            <div className="body3divh1">
              <h1 className="body3h1">Categorias populares</h1>
            </div>
            <div className="body3divppm">
              <div className="body3ppm">
                <h2 className="body3h2">Parques</h2>
              </div>
              <div className="body3ppm">
                <h2 className="body3h2">Praias</h2>
              </div>
              <div className="body3ppm">
                <h2 className="body3h2">Geleiras</h2>
              </div>
            </div>

            <div className="body3fotos">
              <div className="corpo">
                <div className="body3fotoD">
                  <h2 className="body3fotosh1">Disney - Florida</h2>
                </div>
              </div>

              <div className="corpo">
                <div className="body3fotoP">
                  <h2 className="body3fotosh1">Eunápolis - Brasil </h2>
                </div>
              </div>
              <div className="corpo">
                <div className="body3fotoPa">
                  <h2 className="body3fotosh1">Paris - França</h2>
                </div>
              </div>
            </div>
            <div className="body3divbtnpacotes">
              <button className="body3btnpacotes1">Ver pacotes</button>
              <button className="body3btnpacotes2">Ver pacotes</button>
              <button className="body3btnpacotes3">Ver pacotes</button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footerdivcoisas">
          <div className="footerdivformasdepag">
            <p>Formas de pagamentos</p>
            <div className="footerdivimgspags">
              <img className="footerimg" src={visa} alt="" />
            </div>
          </div>
          <div className="footerdivformasdepag">
            <p>Nossas redes!</p>
            <div className="footerdivimgspags">
              <a
                href="https://github.com/AlexandeCrv?tab=repositories"
                target="blank_"
              >
                <img className="footerimg2" src={linke} alt="" />
              </a>
              <a
                target="blank_"
                href="https://www.linkedin.com/in/alexandre-carvalho-4b178a26b/"
              >
                <img className="footerimg2" src={git} alt="" />
              </a>
            </div>
          </div>
          <div className="footerdivformasdepag">
            <p>Televendas</p>
            <div className="footerdivPtelevendas">
              <p>(73)3281-7799</p>
              <p>De segunda a sábado: 9 ás 21 horas.</p>
              <p>Domingo: 10 ás 16 horas</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
