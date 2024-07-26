import React, { useEffect, useState } from "react";
import "./Profile.css";
import logo from "./assets/logo2.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import voltar from "./assets/voltar.png";
import foto from "./assets/eu.jpeg";
import lapis from "./assets/lapis.png";
import seta from "./assets/seta.png";
import aviao from "./assets/aviao.png";
import lixeira from "./assets/lixeira.png";
import enviar from "./assets/enviar.png";
import ScrollReveal from "scrollreveal";

function Profile() {
  const [contarr, setContarr] = useState(null);
  const [hover, setHover] = useState(null);
  const [fileName, setFileName] = useState("Nenhuma foto selecionada");
  const [image, setImage] = useState(null);
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "-20px",
      duration: 2000,
      delay: 200,
      reset: false,
    });
    sr.reveal(".header", { interval: 500 });
    sr.reveal(".abaperfil", { interval: 500 });

    sr.reveal("strong", { interval: 500 });
    sr.reveal(".divrecomendações", { interval: 500 });
    sr.reveal("h1", { interval: 500 });
    sr.reveal(".divattdados", { interval: 500 });
    sr.reveal(".divavalie", { interval: 500 });
    sr.reveal(".divcrie", { interval: 500 });
    sr.reveal(".diveditarperfil", { interval: 500 });
  });
  return (
    <div>
      <div className="header">
        <div className="headerdentro">
          <Link to="/ViagensAereas">
            <img className="perfilfotoo" src={voltar} alt="" />
          </Link>
          <img className="logoo" src={logo} alt="" />
        </div>
      </div>
      <div className="abaperfiltodo">
        <div className="abaperfil">
          <div className="euenome">
            <img className="eu" src={foto} alt="" />
            <p>Alexandre Miranda Carvalho</p>
          </div>
          <div className="editarperdil">
            <div className="diveditarperfil">
              <p className="pperfil">Editar Perfil</p>
              <div className="divimglapis">
                <img className="lapis" src={lapis} alt="" />
              </div>
            </div>
            <div className="diveditarperfil">
              <p className="pperfil">Favoritos</p>
            </div>
            <div className="diveditarperfil">
              <p className="pperfil">Avaliar</p>
            </div>
            <div className="diveditarperfil">
              <p className="pperfil">Criar pacote</p>
            </div>
            <div className="diveditarperfil">
              <p className="pperfil">Logout</p>
              <div className="divimglapis">
                <img className="lapis" src={seta} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="abacaracteristicas">
          <div className="divcaracteristicas">
            <strong>
              <h1 className="responsovah1">Recomendados para você!</h1>
            </strong>
            <div className="divrecomendações">
              <div className="contrecomendações">
                <div className="imgrecomendaçao"></div>
                <div className="divreconomedatavalor">
                  <div className="h4paviao">
                    <h4>Buenos Aires</h4>
                    <p className="aviao">
                      <img src={aviao} alt="" /> 02/09/2024 á 10/10/2024
                    </p>
                  </div>

                  <h4 className="h4valor">
                    á partir de
                    <strong>R$200,00</strong>
                  </h4>
                </div>
              </div>
              <div className="contrecomendações">
                <div className="imgrecomendaçaoo"></div>
                <div className="divreconomedatavalor">
                  <div className="h4paviao">
                    <h4>Ilha Sul </h4>
                    <p className="aviao">
                      <img src={aviao} alt="" /> 02/07/2024 á 10/07/2024
                    </p>
                  </div>

                  <h4 className="h4valor">
                    á partir de
                    <strong>R$500,00</strong>
                  </h4>
                </div>
              </div>
              <div className="contrecomendações">
                <div className="imgrecomendaçaooo"></div>
                <div className="divreconomedatavalor">
                  <div className="h4paviao">
                    <h4>Bora Bora</h4>
                    <p className="aviao">
                      <img src={aviao} alt="" /> 22/08/2024 á 28/08/2024
                    </p>
                  </div>

                  <h4 className="h4valor">
                    á partir de
                    <strong>R$900,00</strong>
                  </h4>
                </div>
              </div>
              <div className="contrecomendações">
                <div className="imgrecomendaçaoooo"></div>
                <div className="divreconomedatavalor">
                  <div className="h4paviao">
                    <h4>Maui</h4>
                    <p className="aviao">
                      <img src={aviao} alt="" /> 03/07/2024 á 20/07/2024
                    </p>
                  </div>

                  <h4 className="h4valor">
                    á partir de
                    <strong>R$1000,00</strong>
                  </h4>
                </div>
              </div>
            </div>
            <h1 className="responsovah1">Atualize seus dados:</h1>
            <div className="divattdados">
              <div className="ncdiv">
                <div className="divnomecompleto">
                  <p className="paragdados">
                    <strong>Nome completo:</strong>
                  </p>
                  <input
                    placeholder="Coloque seu nome aqui"
                    className="inptdados"
                    type="text"
                  />
                </div>

                <div className="divpassaporte">
                  <p className="paragdados">
                    <strong>Passaporte:</strong>
                  </p>
                  <input
                    placeholder="Coloque seu passaporte aqui"
                    className="inptdados"
                    type="text"
                  />
                </div>
                <div className="divfotoperfil">
                  <p className="paragdados">
                    <strong>Foto de perfil:</strong>
                  </p>
                  <input
                    placeholder="Coloque sua foto de perfil aqui"
                    className="inptdados"
                    type="text"
                  />
                </div>
              </div>
              <div className="telediv">
                <div className="divnomecompleto">
                  <p className="paragdados">
                    <strong>Telefone:</strong>
                  </p>
                  <input
                    placeholder="Qual seu telefone"
                    className="inptdados"
                    type="text"
                  />
                </div>
                <div className="divfotoperfil">
                  <p className="paragdados">
                    <strong>Gênero:</strong>
                  </p>
                  <select>
                    <option value="">Maculino</option>
                    <option value="">Feminino</option>
                    <option value="">Não quero opinar</option>
                  </select>
                </div>
                <button className="botao">Atualizar</button>
              </div>
            </div>
            <h1 className="responsovah1">Avaliar suas viagens:</h1>

            <div className="divavalie">
              <div className="divqualdestino">
                <p className="paragdados">
                  <strong>Qual foi seu destino?</strong>
                </p>
                <input
                  placeholder="Coloque seu ultimo destino aqui..."
                  className="inptavalie"
                  type="text"
                />
              </div>
              <div className="divtextarea">
                <p className="paragdados">
                  <strong>
                    Descreva sua viagem e experiencia com os bibius e tielis!
                  </strong>
                </p>
                <textarea
                  placeholder="Descreva aqui!"
                  className="inptdados"
                ></textarea>
              </div>
              <div className="divestrelabtn">
                <div className="divestrelaeparag">
                  <p className="paragdados">
                    <strong>Avalie nossos serviços:</strong>
                  </p>
                  <div className="divestrelasperfil">
                    {[...Array(5)].map((estrela, index) => {
                      const current = index + 1;
                      return (
                        <label htmlFor="">
                          <input
                            type="radio"
                            value={current}
                            onClick={() => setContarr(current)}
                          />
                          <FaStar
                            className="estrelaperfilimg"
                            size={30}
                            color={
                              current <= (hover || contarr)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            onMouseEnter={() => setHover(current)}
                            onMouseLeave={() => setHover(null)}
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <button className="botaoavalie">Enviar</button>
                </div>
              </div>
            </div>
            <h1 className="responsovah1"> Crie agora mesmo seu pacote!</h1>
            <div className="divcrie">
              <div className="ncdiv">
                <div className="divnomecompleto">
                  <p className="paragdados">
                    <strong>Nome do pacote:</strong>
                  </p>
                  <input
                    placeholder="alexandre"
                    className="inptdados"
                    type="text"
                  />
                </div>

                <div className="divpassaporte">
                  <p className="paragdados">
                    <strong>Preço:</strong>
                  </p>
                  <input
                    placeholder="1000R$"
                    className="inptdados"
                    type="text"
                  />
                </div>
                <div className="divfotoperfil">
                  <p className="paragdados">
                    <strong>Data de partida:</strong>
                  </p>
                  <input
                    placeholder="Coloque sua foto de perfil aqui"
                    className="inptdados"
                    type="date"
                  />
                </div>
                <p className="paragdados">
                  <strong>Descrição do serviço:</strong>
                </p>
                <textarea
                  placeholder="Vai pra onde?"
                  className="textareacrie"
                ></textarea>
                <div className="avalieimgsadd">
                  <form
                    onClick={() =>
                      document.querySelector(".input-field").click()
                    }
                    className="foorm"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="input-field"
                      hidden
                      onChange={({ target: { files } }) => {
                        files[0] && setFileName(files[0].name);
                        if (files) {
                          setImage(URL.createObjectURL(files[0]));
                        }
                      }}
                    />
                    {image ? (
                      <img
                        width={150}
                        height={150}
                        src={image}
                        alt={fileName}
                      />
                    ) : (
                      <div>
                        <img className="absolute" src={enviar} alt="" set="" />
                        <p>Adicionar imgagem</p>
                      </div>
                    )}
                  </form>
                </div>

                <span>
                  {fileName}{" "}
                  <img
                    src={lixeira}
                    onClick={() => {
                      setFileName("No selected file.");
                      setImage(null);
                    }}
                    alt=""
                  />
                </span>
                <button className="botaocrie">Salvar</button>
              </div>
              <div className="telediv">
                <div className="divnomecompleto">
                  <p className="paragdados">
                    <strong>Destino:</strong>
                  </p>
                  <input
                    placeholder="Qual seu telefone"
                    className="inptdados"
                    type="text"
                  />
                </div>
                <div className="divfotoperfil">
                  <p className="paragdados">
                    <strong>Data de volta:</strong>
                  </p>
                  <input
                    placeholder="Qual seu telefone"
                    className="inptdados"
                    type="date"
                  />
                </div>
                <p className="paragdados">
                  <strong>Desconto:</strong>
                </p>
                <input
                  placeholder="Quantos % de desconto?"
                  className="inptdados"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
