import React from 'react';
import './App.css';

const Header = () => {
  return (
    <header>
      <img
        src="https://i.pinimg.com/originals/1d/57/9c/1d579c27e2512bf1298bea2c43659bd9.png"
        alt="Logo da Loja"
      />
      <nav>
        <ul>
          <li>
            <a href="pagina-inicial.html">Página Inicial</a>
          </li>
          <li>
            <a href="camisetas-promocao.html">Camisetas na Promoção</a>
          </li>
          <li>
            <a href="tenis-populares.html">Tênis Populares</a>
          </li>
        </ul>
      </nav>
      <div className="search-container">
        <input type="text" className="search-box" placeholder="Buscar..." />
        <span className="search-icon">🔍</span>
      </div>
    </header>
  );
};

const ProductBox = ({ image, title, oldPrice, newPrice }) => {
  return (
    <div className="box">
      <img src={image} alt={title} />
      <p>{title}</p>
      <div className="precos">
        <span className="preco-antigo">de {oldPrice}</span>
        <span className="preco-novo">por {newPrice}</span>
      </div>
    </div>
  );
};

const App = () => {
  const products = [
    {
      image:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFRUVFhYWGBgVFxUVGBgVFhYYFhUYFRUYHSggGBolGxYXITEiJykrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lICUtLS0vLS0tMTctLS0tLS0tLS0tLSsvLi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAO4A1AMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xABGEAABAwEEBgcEBwQJBQAAAAABAAIDEQQSITEFBkFRYXEHEyKBkaGxMkLB0SNSYnKCkrIUosLwFSQ0Q1Njk+HxCDM1VLP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQEG/8QAKxEAAgEDAwIEBwEBAAAAAAAAAAECAwQREiExMkFRcYGxBRMUImGR8KFC/9oADAMBAAIRAxEAPwCcUREAREQBERAEREAREQBYWldKw2ZhkmeGNG/bwAGJPAKPukTX2SyTdXBKbwFLoYxzcRUkuIJvDdgOainWbW6e2NHWudeDi88DSjQ1opRoHmK51rHUSUSZdY+kyOCOOSGLrGPcQHlzQwhoBcGlpJvY0oQMQdxWZZOkWzSCNzWuc1928R/dk+11nIC9yxXzkLYHNEb3Esb2g2pAq7aeO8qlukQ2rRW7WtDiCRgMN2zkvMslhH13ZbWyQVY4OGBw3HIjeDsORV9QFq70gubUudI5/VtbEAWmjxWrSXu7UbqCoNSKmm9Sjqdroy2sqW3Xh9yjSCCDk5oJvFu/DCi9UiLidYiIpEQiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAtHrfPOyBzrOBfFMyBhUB2LiBlxW8WBpnRxnZdDywg1BG/j4rx8Hq5PljWS3SvtBdM6/JQVOZqBQ45UGzuWs/aCMCBt4ba471I/SNq6yyvbdcXyABpbdLWkXaZurU0FcMFGTzV9AaU/5UEWMx5JHXjTbh3K5ELrqOyGdfFeTscCDnewNd+2tFQa1oCSduGGX84qREyDKXUa1oAGVQPM7/AJqZOibTQbciMcLQ9/ZPWvDxQZXHuN4l2OFBiVCbZnDsnImtdorh8vBdLq26LrGGW9RrhQtBc40cCMKiuIyqM14z1bn1ki1Wr+lGztcGuDrhAJAI9oVAIOTqbOIW1UysIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIi8KA4XXnRTJ5T7pDRVzSDUnANcCMDQHJRHDqk6S2OaGu6uNwJcQAKZjA54qX9IskAd1ntl5PdhTuxNFrrHS8TtPwWGdRqTOjClFxRxPSNoCBthMwY0SxyNa1zW0vNLroa762B8W9yia7TtV2Y0U7aU0S2dn7M2O6wX5HX8Q6VwdTdUBzrxyyAChnTOh5rNL1UrbhxpQ4FtcxXYraE9sFVzDfKMBrhXCp4O+YXSanaOnlna2AfS0LgLwYQ0HE1PMYclz7YaUrUbjTA8V23R1Znz2yGE3gDJUuZ2XlrReNCcC3AVwOZVzMyPo3QdnDIWdlrXFov3WhlXgUJIHFbBUsbQADICiqUyAREQBERAEREAREQBERAEREAREQBERAEREAREQHM612cNo/Y7A8wMD5UXGG0XXFSHrTGTZpLrS4gVAAqcDsCiyW3tiAfOHNrUgEUc4Vp2WmlRxWWrScpbG2hWUYbs27LXt3rUaf0My1Pa57a3VrGa1RA1Mb+Hs+lVsINZ7O7AvLfvNPqKhVfT1ob6WX/UUZ7akYMurcUhY0gNZeaCAMA2uOG6ilHVTUuOwvvMe5wukAO2VpjzAqK7nFcA7TNmH9608qn4LtdA9IFjkDInylr/AGaua4NO4lxFB3rTQhPumZLmUP8Alo7NF4DVeq4zBERAEREAREQBERAEREAREQBERAEREARFr9PaTbZoHzO90YDe4+yF6ll4PG8GTbLZHE29LI1jd7nBo81x+mOkiCOrYGmY/WJuM7qip8FFGk7bJK8vkcXE7SST4rBc5ao0F3KHVfY7TS3SNa5AWtc2If5Yx/MST4UXFWy0OkcXPcXOOZcSSeZK8cqCFaoJcFbk2WS1LqyYbO57g1oqTs5ZknYOKyP2WMYF5e76sQqPznPuBRySeD2MJNZ7GuACuxkDYsqsdK9U+gIBN/ImtPcpsPgVQ6Jm9zCQCL4qKHI3hjTuXqYcfBr+8zq9WNfJrKBHg+MZNdsH2Ts9FJOhteLLPQF3VOOx+Xc/LxooIfA5uJyORGIPIhVRzFuRUZUYyCnKOx9Ngr1Qlq3rzPZgGk34/qu2cjsUrau6ww2xhdESC2l5pzaTXxGBxWWdKUS+FRSNuiIqiwIiIAiIgCIiAIiIAiIgCIiAKKuk3TfWPdC09iKoPF9Be8L1O4qULXOI2PkdgGNc48mip9F89W20GQFzjjIZCTxdU+q0W8cvJTWe2DCkcrGSoZNhjmM+YVLZK0508MlrM5cRra5Yk4AL1ZWizQmT/Da54+9g1n7zmnuXknhZJQjqkkXbRRn0ANBUCVwxq7aMM2tOFNpBO5bLVnVW0Wlwkjd1UYdhKagkg5xtwJ8uao1c0U6eaKAvaY5KSyXTUhrK1DjSrXHLP3lMccbWNDWgBrQAAMgBkAFzLu6dFaI8v+/vwbKNL5r1PhdjhR0fQNpG61y3n1IaLjQ4txJuGtaV3rX6Z1GnjpJG4WoNbduPBa8NAIaGgHtUrUCoyyK72e1w3mE0JBeA76pDauG8VCy7NMHtvNrQ5VFK8RwWBXleLy3nzNTtYY4wQPERG0VdevFwfHQgtu0AJJ97E03U5hWLQy64jcfLYfBSB0k6GDS21RANLj1cp2doUa84YYVBOeS4a2tyNQaX2VGRuOwI4XS3wXdt6yqwUkcyrTcG0+xjRvwI2V9V1PR7pkwWqEk0a9/UvrlSQANP5wzzXGyPoe/4FZBfQD74OHOv88lbJZWCpPDyfUKLC0JajLZ4ZDm+NjjzLQT5rNXNexuQREQBERAEREAREQBERAEREBx3SjpXqbGYwe1Obn4Bi8+g/EoftHss4fFdP0l6U6+2FoPZhHVj71e2fHD8IXL2s5DcFuox0xMlR5kae0YGu2tDx3FUWJ9a8Hf7fJZkzKrWw9mVzN4vA8sDXjl5Kb2Im1JV+zH6GQ/cHcX1/hCwZXrOso+hlG7qfV3zXk+PVe6J0ufR+zOx6NnxC0Slt4DqgBeF41vNveyMqgLutJaRDWdmpJwwJYe40UQauaSNnmDq0BBa7LI8+IC702p5xofyj4UXJvaD+bqNtrVSiYtokIfeIJxvUONSK0qQt1oS3Md2pC4vG1zhQcGsr2R3LWVacHE45mnA8VVDCwAG8Kiu0jCvNVNJwwzdUrJ8GVrxbI32KYV2MplnfbRRWXgsFBT6SUgVrQG5TFdPrtpFoa2BpqSQ51CTRoyGeZOPdxXFtn+ku7AwHzdVdCwp6Kfmzk3NTVL0LOk8AKfWaPPHyqq43YtFca15bz/O1WLY+rmt5u8MPj5LJsraFbu5m7E9dGWkOssTIzS9CAwj7JaHMPKhp+Fdaoh6O9LdVaYwT2Jx1Ttwe3GI+Zb+JS8sNaOmRqpS1RCIiqLAiIgCIiAIiIAiIgCxdJzujhkexpe5rHFrQCSXAYCgzxWUiA+b7RIXOq6tSXE3sHVqRUjec1jTuqSp91r0ZBLA90sTHFrTRxHaBOGDhiFFlp1OvNvRSUP1X5fmHyWj6uEXiWxWrSclmO5xzyteHh0gO0XvCg+NFuNLaLmh9uM7gW9oHlRarR7WuY5w9trnB/K8R8lepxlw8lDhKOzRXWpA3n0xK2VhdWKfj1f61rYhmd3xWwsQ+glPGMebj/CvZ8eq90e0+fR+zLDitxo3WCSNoYSXNGVSagbq7QtOgUpwjNYkVxk4vKOri0wx4JJpQE5/7LAtOnW0+ja4ne+7QdwGPiFqbOR28fcPqFj1G8KmNvBMulWk0j2aUucXONSViWjB4d9l4PdQj1KySqLVGSw0BJ2U44UHeQr3sU8mtglvPca5UHx+K2MTlrbToyWx2qWzTgCRjiDQ1B2gtO0EEEFbOywPf7DXO+6CfMKEZrGSTi84NxYpiGEg0c0te07nNOxfQehreLRBHM3KRjXciRiO41HcoV1S1UknlEcjurDq7nOwFaAVopp0NotllhbDHW62vtGpqTUkniSSs9apCaWl5LqVOcH9ywZqIizlwREQBERAEREAREQBERAaLXOa7Zj9pzR8fguPE1GhbXX631c2Ie6QTzI+S5m0S9nksFw8zOnarFM2mgLMZ7bGPdirK7m3Bn7xB/Cohs8JZPO0/wCJKD3SOCnPo0i7M8hzL2M7mtvfxqKNN2S7b5mD/wBiYeMjj8V0bGOEc29lmRqp4bjQDmcT6D+eK7To3sMcpmZLG14DWGjgCK1cAaHmfFchpF1ZCNxp4YLptQ7UWSyNBoXMB/Kcf1LXcS0U3Lwx7ma3pupUUE+cr/CS49X7KB/ZoP8ASj+SodomzjKzwjlGwfBa02yT/Ed4lY81seM3u8SueviMW9os6D+CVMbzX+m+NhjF2kbB2gMGtGw8FeNmYPcb+ULlJdInDtPwNcz81Zdpri/x/wB1bG5nLdQf7IS+FpbOov0zsI4wNg8Fh6bsweI2kAjr7OfCZhXNN0nX63irVv0rcDX49l8Zz3PB+CtU6zeHTwvNFbsKcFq+anjfGGbzpS0bGepnMbC68WFxa0k4XmAmmI7LgPvLVQPHVilAOGC7bXewddY5AM2ASN5sxPlVR1Ypuwubcrg22j5Nvq/aLtqiqc3U/NVvxUmKGmWi7I1w91wPeDVTI01Fd6nbvbBC7X3JnqIi0GQIiIAiIgCIiAIiIAiK1a5brHO+q0nwCAjLWSW/M4jaXHuqQ3yA8VqmlzqChABxJ9Ath7Tie5VTtDQeC5zllnXjHCOv1Bb9DI7Y6Y05NYxvqCo11oYG6SnNMnuf+4D61UqalwXLHF9sGT/UcXehCi/XkXbXO7aS4DmcF17NY/RxLt5efycSMTVZujbYYZWSD3TiN7Tg4eCxWBeOWyUVJNPuZoycWpLlEmz3pWB0UlA5poRjW8BTlt5Ki0NdfrXs0pTjWtVx2r+n3Wc3HVdGTltad7fkuvinjlF9jrwO4nDHaNi4NS3nRnh8dmfU291TuIZXV3Wfb8Gtmsrgy7fJNQanuw8lYdEbwdXIUp/OS2VrhaSCRUjLgsWRgzOXOnmuvb8GK4juUss57PaPZNefPhSvitPrJbQ5wiafZxd97YO74q5pPTjWgshNXY9rYOVcz5LnoMTitTZy61VY0xPpTRU4ms8UmYkiY4/iaCfVRXHFdL2gZOIHJpIXedHlq6zR8B+qHMP4HEDyouVtsFy0Ts/zHHucbw9VxLpY/Zus5b+hz9oOKmPRE4kgieNrG+NMfNRNb7JjUKS9UD/VIuAcPBxUKDLLtbJm5REWkxBERAEREAREQBERAFg6ddSzyn7B9FnLWayGlml+78Qoy4ZKHUiP7I3JeaZcBGeSvWLJeRWbr7TDDSoLw533G9p3pTvXPgsywdWcsRySHoezGKCGM5sjY08w0AqGde5L1rtHCSo5UDD+8zzU5KA9bJAbXL9p8re8SucPJwXatluzhV3saCQUPmrLysh4wB3VBWJIcaLWZipo2qpkrmmrXFp3tJB8QjsFRVe4GcGb/S09Kda7vNfM4rFmtD3e05zuZJVsleLxJLgk5yfLCvWYYqwVk2MZr0iTD0Q2q9ZpY/qS1HJ7R8WuWBpUk2yc/bp4AUVzoeoBaRt+h8KSU+KafiuWyX7RDvFoXJvVuzqWTMO0Cq7TUh1bKK7HvH7y46YbV2OpEd2ygH67z+8s1vyabrpRv0RFrMIREQBERAEREAREQBazWb+yy/d+IWzWs1l/s0nIfqCjPpZOn1LzOGswo1bTUKC/PPMfcaI2/iN536W+K1UjrrCuo6P4LtkDqYyPe/zuj9KyW6+7JtupYjg6RzqCpyGK+b9Mz35ZX1zeHDk5tfgp/wBY7WIbLPIfdiee+6QPMhfOtpkqSQMXgAAdwHouvbrZs5FZ8F9rew55wGziVr7OKmqytIv9mIe6KH73veatxNoFqM545U0VVF4gKSF4Qq6Lx5plmgKQ0A4lZDZ6YUw35qzFCKKq5jTf6hDwkzodtFZpwPejafyuIH6lvddoaTsf9ZvmCuY6Fj/WZ20xEQpyL8fQLstfWYRO4uHouZdrOTpWjw0c47Jd3q1Hds0fEE+LiVwdMFJNgjuxsbua0eSyW63ZrunskX0RFqMQREQBERAEREAREQBanWc/QEb3NHnX4LbLWax/9g82+oUKnSyyl1rzI+0s+7GVI+hrOI4ImDJrGjnhiVHGsrB1eJW/1D0s4H9kfjdbejJ4e03zqORVFDCNV1Fvcz+kaWlglG15Y3xe0nyBUONhbEwSnF5wZw4qU+lNzxZ2EewHOvcXXewP1eCh62SueanICgG4LsW+FA49bqMbaqxkvLiqKuKihwVKrVNUB6FQVUF5RAVxhXA2qpb5KkWuMHGRg5ub37UykeYJG6JTdtTx9aE143XtofM+K7jXMVhHB1f58VGHRrpBh0hEGSsdVsgIDm+wGEk4biAu209pcWmQwxGtytTUZAYk95C5t3jLwdG0T2NXE2tO5SaAo7sFnvPY3e5o8SpEWWguTVdcoIiLQZAiIgCIiAIiIAiIgC1Os76Q83tHqfgtstZrFZ78Dt7SHDuwPkSoT6WTpdayRnrLIXyxRNFXOe0AbzUYY8aLZWKyyQ26ASi44ObXEGt8EAYccFyWkNIGHSETnNIEcrXu3Xagg125FSPrnouSV0dos4MmABuGuRvMcKZjPyVMVtlG6b+7S+Hk0vT9NSwRN+taG+UchUBftMjcnvH4jTwU+9Pv/joq5/tDP/nIvn9y0p4OcXhpaYf3hPMNPwV7+nZvs+B+a1pC8U1Ul4kdEfA2Y09LuZ4H5ql2nZtzPA/Na5eL35s/E8+XHwM92mpjtaOTfnVYv9JTOzld3dn0Vh5oCqIxgvHOT7nqhFdi895PtOLuZJ9VXA2gqrdFejUCRsNCW18FohkiNHdto/Gws+K7/Q8r4nsLXEuNQ7HMOGNe9cFoGEPtdkY6t11pha6mBuuka00OzAlSlpSwxnSUsNnAa2MOcQCSG3aVb9mpP/Cqqo1W75Oz0KayRHeQu4UfaryF00Ypk47a4AElSCvKPAuuteQREVxlCIiAIiIAiIgCIiAKiaMOaWnJwIPIihVaIDhNLaoPOPVRylpqCDdcd1cPmsLR1mtcL2gdexpkaC2NrnhocQKkOAaRvO5SQiq+Uk9jR9TLGGiKf+oSalkszNrpy7ubG4fxhQQVMf8A1Ek37EK4XbRhxrCocKtM5bcqFcKoKA8XhXqpegLBNTRXgFYiGJKvoD0K/AVjq440bTf6IDM0daSyaCRvuTxOHEtcCpQ0dot75JpnupLPIXOIrebGCezQkYk91KDaVF9iYOss43zNr+dgX15ZtGwx+xG1vGgr4nFQnFsupVVDOxzmpGiOq7V3s3aNdhVxJxJ35Z8V1yIvYx0rBCpNzllhERSIBERAEREB/9k=',
      title: 'Camiseta Maresia Black',
      oldPrice: 'R$89,90',
      newPrice: 'R$69,00',
    },
    {
      image:
        'https://static.cdnlive.com.br/uploads/728/unidade/17192380928461_zoom.jpeg',
      title: 'Camiseta Maresia Marinho',
      oldPrice: 'R$89,90',
      newPrice: 'R$69,00',
    },
    {
      image:
        'https://monteleste.cdn.magazord.com.br/img/2022/08/produto/608/camisetas-camiseta-monte-leste-fire-money-branco-p-1660084437554.jpg',
      title: 'Camiseta Fire Branca',
      oldPrice: 'R$89,90',
      newPrice: 'R$69,00',
    },
    {
      image:
        'https://images.tcdn.com.br/img/img_prod/811036/camiseta_fire_apparel_needlo_cap_branca_8372_1_4ac86bb4b4bcea6c6adbb376853d12f0.jpg',
      title: 'Camiseta Fire Rosa',
      oldPrice: 'R$89,90',
      newPrice: 'R$69,00',
    },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <div style={{ backgroundColor: '#006494', margin: 0 }}>
      <Header />
      <h1 style={{ textAlign: 'center', color: '#fff' }}>
        Camisetas na Promoção:
      </h1>
      <div className="container">
        {products.map((product, index) => (
          <ProductBox key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default App;
