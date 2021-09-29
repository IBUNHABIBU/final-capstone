import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/actions/fetch';
import Loading from '../components/Loading';

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  if (cars === undefined) {
    return (
      <Loading />
    );
  }
  const displayCars = (
    <div className="car-container">
      <div className="p-2 carlist">
        <div className="row">
          {
                cars.map((car) => {
                  const {
                    id, color, engine,
                  } = car;
                  return (
                    <div className=" col-6 col-lg-3 col-md-6 p-1" key={id}>
                      <Link to={`/cars/${id}`} className="link">
                        <div className="card">
                          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYZGRgaGhwYGhocHB4cIxwYGhgaGhgaHBweIS4lHB4rIRgaJjgnKzAxNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQhISE0NDQ0MTQ0NDQ0NDQ0NDQ0NDE0MTQ0NDQ0NDQxNDQ0NDE0MTQ0NDQxNDQ0NDQ0NDQ0NP/AABEIALkBEQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EAEEQAAIBAgMEBwUGBAYCAwEAAAECAAMRBBIhMUFRYQUTInGBkaEGMrHR8EJSYnLB4QcUgvEjM0OSorIV0iRTwxb/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHhEBAQEBAQADAAMAAAAAAAAAAAERAhIhMUEDUWH/2gAMAwEAAhEDEQA/AOoRzzhq0Rf8PrHBPL4/KRoYaPYQSnMwMp4eZMKmyCOthwkBU/2jpfj5wJ73hhyJBmP3vSK/KBKXvxhh/rWQq3KGDAlDx+skOaGDMiQVPr6EIVJFeEogTq/MQ1MgCQUqJewYE8AQT5DWBaEICQX7/h6EiIPzHhr+n6wLAEe0gAPE+g+N4+Xjc+JP7QJi1o6tIlPAQ831rAIkxiTGvFfnAV+8/XKOG5ReMQXnNAs0fNGCR8kBZhHzD6Ma0RtARaPmjacIxEAsxhAwBHuZkHeKBmMeBzGYxxeCG4ekPK3AzTJgh4xxcb4sjfdPlHFB+FvGFK8cEx+oYC7MAOJPziVl3MW/KC3qoMBKYV+8wgrfZpm/4iqj0LH0jolXf1achmfyayfCFJF5GSinxjJQO92P/H/qAfWH/LLvAPM2J8zrAgaqn3s3JQXPkoNoQqA+6j24tZR5E5v+MsW5/CQ16yJ77qo/EQPiZkGt9wA8z8oRQnazeFh8BcecrL0lSPuvn/IrP/0BkH/l0JKqlZyNwpsD5PaMp6i+mGQa2ueLEsfNiZNc8ZlHplQQvVVrncU1HK19fC8m/wDKpmC5KgJ3FCD4DfLlPUaAUQhMjH9NdWRai76G9rIRa26plB3790Cl7UUPth00vd6bZR3uoKf8pPNPUbeaOG+tsq4LpalVF6VRHH4XVv8AqZZNcwCBPCOEPCB1pi60wJurMfq+YEhGaOEMCSw3tHGXnI7W2xw3D4QDsvCPk+r/ACgFjHVCdpgSBR9GIpz+HyiAAgtUgOV5+n7wc0brIs0GHz8jHzCNmivAfNGiigcx/NI2gYv+UFh5rceskR23IQOZA/65pbNLgR42jFXG8TTKsFc/asOQN/Mm3/GOaJOudz4/+oBlhSd4izQqBMLY3Cpfjl18zrJiXG23gYWXvizcoUIfiG9D6AmEtZeJHepHxERY8ohMg1qA7Gv4wr8/7SGw4X7xOV/iD0t1GGyIbPWugtplS3bby0/qlxNZGL/iMwquiLTNMGy9k302nMp115Ed80ujv4hj7Si54EfBtZ5UlCWKVIsVRVzMxChd5J0AnRy2vbKXtthn/wAzKObIfj8hNOh0jhq2iVAb7g4byRr/APWeWYXo5ETKSAlNS9SoBfQe+y8RsVRvJXeTOeHSFNyScPlBY2yVGBA55g2a2y+lzwluEtr3tsPuVgR93VfMar/wjZSNCGA4WuCf6NPNJ4zg+nKif5WKqUx92qpK+Fs6+YE6jof23xKkdYiVUvZmpkEAb81iQPIGF13qG+im4G0LZrH8q29UkeRCbZVJ2kWFx/TYEf7Jnp7X4HEMq50QnYtXsb7aMwyg33Xm22DZgFFmG1bknTjrtHORWRjOgMNWPboIzD7Vu2Od7Zx4IJSPs1VTXD4qvTG5WbrE/wBtQO3/AFHdOrHR9S12I8T85TevTT3q1Jf6x+kn2fSn0X/MorDEZKhv2WRQt1ttZc7C978JpHFIBmJyi9u32Dfubb4XlF+nsKu3EIe7WMPabC7BVv4aeUnlfX+tHrL7Is3OZi9MYX7LKt+Fl9Nh8RAbplE1Y3TfUA0QcXtoq/i2DeABeS82NTqVrCODAVwdeOsK8y0lQAyS0ana0dtkIhZrxQWe3CD1h3An65wJLxXkXa5D1hZeNz9cNkAi4/bbHDcvOCsMLAax5fXjFCyd8UDJW27WOWMhzjdHLzSJS19sGywbn6MUCRWtsi6wmAIV+6FHfkIgv0IAUGMU52+uECQpPJfbIVK+JZ1XMidhMpB2HtEcbnhwnqlSoQra7AdgtsE8f6LrNYKWKsRcEG19L2I4/GXnna599ZGUFsbEajcdJvez2Byoa7DtNdKfJdlRx3+4P6+UbEYo+7URHHMZSPEaeks0+kEOW5IAAUKQFAUfZUr2Rv3CdPOOXuVB7XV+ro08Ovv1bVn5UwSKCHkTmY9yzmaZt4C36n9J0nTfR5xFd8QtVO2bhH7GUBQqIr3ZCAoAuWXZsmNiuj6lIXqIyAnRiLoeFnF0bwJmbv66TPxBnBlesbMChsw2EGxDHZYjUbpKVkGFXM6/mv5aj1tIrfbMQFcCoABq3vcznGt++45S50f0xXwgBoOxoZu3Ra5Ck8h7u+zLY7dh2U1cw0rgE5vdIyt+U7fEaEcwJYlkrbxftq5uiO4pkaXbXXiRtsd++27ZOaq9KhzqTfu/eZOJpmnUZG3E2O4jlxG+JG1lZq8cSx2A/XhEcSRu89fjIVfjDWrGst32cLvVVC6pmBIa28C9t24HynpWB6NFr9cxbiLAX5jWeQ4HGGm6VAL5Gva9r8RextfUbN87vor2ypv769Wd2pcHxAFvESdb+Nc2Nk1mwRJClsMNaiAXNAf/AGUgPepbyg93UrpdZ0FLFIyhkYOpAYFe0CCLgi24gyhh8TTqpdHViNhUg2NthA3d84/Hiph8tbDO4wwfrHpBiFpsT2zYf6TXNx9gnMNLzOa6TrI9JoVG4W7z+gvJrHeT4afv6zB9nsW9Sgj1CC5LAlL5TZyARcAkbr7NNCRqdukzcPSZ+m/v5ElFRu1hgGBnbgPP9oWc290yA9YxtvtKzVjz+u6B1nMDvMCznXhGNQyHxhC0KPPHgXH0I0Ix/wCX4RwlttoYAMRWaZOHH9o4IOyBYfWsEqOIECUnjEDIoQaFSFu+JWgAgxBIFfpXHLSpO7+6BawGpJ0AHnPKKSEIDsItY8CNhno3tbSJwlW17qA/grAn0vPMUxJynYRYzfLl2vYmujgG4Dbxz3zMcEbJhVMY5Jsx26CTUekiND5j5Tc7Yv8AG6h6lHKSjur3A6t11IJF2FROywF9jKp00vDoVqidqm5F9uU2vyNtCOUwqdYcdslStvBt6SypY1alek3+dRUE3u6Dqm139gZGPNkaQ4fomjmz069tLZai8SPtpcHZtKqJAMY1rEBhzk1TqCCyO6Np/hupvzKul0YfmCSWRZelp+jnVWcoSoUkMpDpe4ABdCVGp2XB0M5f/wAm5b3QBexVQfHaSZuf4qg5HIuLZkNja4P6SHDYl0btVcQw+71rrpyIkvNanU/VDpFw4Fr50FjzUe74gdm34RKCNvl6g6FqgXN2tVDgFvevq4sCduthcnZJsN0XSJAqVmpC5u+QuoG6wVs3oZPxbn0pq8kE7nor+HtGtrSx6YjT3aagODuzo9QFR4To+hf4Z0GuXrV7rtQp1NuWi9ocwd0mnl5VRYaDTzHwvcy91SggE6/dUMx12AqouD3z26j7DYZNlMN+cs9+ZDEiXU6JRBZFVRwUBR5AWjTy8Ww9OrfsYXE30Gq5QeYDa/Kdf0XgMay2akiKdod12cwpc+BAnaNhl2WAPAi3kRofCRtQts+vAyrmKXs70RUwyunWIyZs1NBdigIGamC1uzmuRwvbu1XRt5lF3txv9bjs84qGKJ0B1G0bCO8GS8yk6sXEe2+TLUvIFGbauvEW9RsMToV2+B1+geU53mx0nUqwySMgj9oCuRJVriRoFxFcSWwMApwhEenPzihdXFCsjMY2eR2PERivjNOaYuBv/WMKogKTbZHy323hU4eELSvkG4wlB+hAnsIB5GAVO/68IzORppf18tsKeomZSrAlSCCNoIIsRPJPaLos4eqyahWuabHYw4X2ZhvG3wM9ZLtwI7/q8rY7BU66mnVCuh2rb1B2g8xYxLjPU15J7P8AQbVUqOCFFMDNqoZmb3UQMe654kDXdB7QdErTJKVUqpcgOoym4+y67jz5GbL0qS4emMrB89UFrqtitZgqqzEZjYX2ggi4OybPSnQrJhmdD1gr5esUKAQxOYPrwZVJC5bkHQgwjzjCm4AuBrbU2Guy53CalXCugu6MoOxtqnudbqfAzIXRm8/Ld8fKaHR/SDIb06jITtANge9djeIM3KzYkt+kfNLgx1N9KtFfz0rU278nuMf6RJh0ar/5FZWJ/wBOp/gvyC5iUY9zCXWc/pnpVK7CRLH83cWZQ3pIcdhalE5aqOh3Z1K3/K2xvAmVs016SxbpYZHY5SyttIN7Hdv0PgY9TDOvAj63HQ+kiwx1vw9JdbFhxZjrx3GamJdR4aqoZSyagghttiN9p6E3tpiGpKtFqVYKAro41ZMtjmBK314E7Z5u6ndJME7I6OACyMrjMLglSCARvGkXmUnVjvMD/EFEbJUFfBuNqkGvR5Xpvaog5IROooe1JqIXXJWUbXoNnA4Zk0dDv1Ww4zlE6Xw+KQrUphXVS+QqHUqvvOgIt2b3K9g21BbWYPSns/hxkfDs9Oob5MpZQ7B8hCFj2WzXW17XFricsdZXoNT2oS2o+B/WZ1b2pUHZpPLaXSGIdlDVGKtbtsoLWOwnW7eJM0quEpq2WtWrZtCVVCuh2bFbSX4T5d3U9rKYFww8T8QZEPbPDEdtlDDZY6/0kaju+M4sNgE1NKq5H3i/rcoLd81ujuk8PcHD4BXYfd6m48VzvJpldHg/bRnNqFGrW3Aqht4tawm0mL6QqAF0o0EJ1zsXY8rLpc98x8X0t0gy5lp0cHTto76FfzNiMuUHitNhoTKXQhRsVTZ8RUxVUMGDi5SmLe/mfUi2axRUU7DraNax2WA6RWumdVy2Yqb7ypsT9cN2yWQZi+z6ZXrpcEdbUtzyu2zjofXnN3JynK/bpz9G1kqMd8AQ1EKk6zlHkdvxRQOaUW3eVx8DJELDUEjyP7yPrl4gR2ccSZpzS9Y3I+Y9dYS1OIPgR+tpAHO4ekWY8fCBN/MLssfEfqbCHmJ2Eed/laVSJR6WxwoU2qEXtooO9joB3fKDWxl7/H5CZ2N9o8NQ7L1lB+6oLkd6oDbxnm+P6br1dHqMF+6vZXyG3xmSwmvKenouJ/iBhl91Kj9ygD/kw+Ez638R1+zhmP5nA9ApnDMkgZIyHqu06Fxb4mjXWnT1Sqaip1pUoKzsdoTMygkjslW85q9Io2WoS6sSChpkdk1FKioCwf75KAAXBO07T5zhMU9Js6Eg7NNNLggg7iGCsDuZVO6avSPtGrUhSpowUZiA5DENU1qlm/1LnUXC222kNc5VqdrMONx5yRMIz6otxtsDcjw2+kqkw1qEWsbEb4MSrWZdNe4/IydcbfaBCHSrHSoFqD8Yuf8AcLN5mLLQfYWpHn218xZh5GXUsaeA9oKtNciVLpvpvZ0I4FHBFu60u0sdgqgtWwxpMf8AUoMcoPHqmJVRyAMwG6IqWzJlqKN6MGt3r7y+IlFiRoRYwZY2sayIWFOoXTTKxXKSNtipOh3TDzm97m8Mm4Jlvo/BM5IUC4GZmOxF4mLSI8Pj3Xb2hz+c2cPi1Zbj+3fIcRg6CXDPUY5cwYBVVhe1gpJNweJHcIzYPqmdkfOiHK9lKlTrlLLc6GxsQTvvaXnqxOudavQ+KC4ii593OEf8lT/De/g9/Cdf0hhTTpLnVQVZWzWubVRlzMwGlnSptPcN84BnUjYJO3TGJZSorK6WKgOqsQCSSM1s20k3vHU1ebILpWwrPpZXtUA4CoMzLyysWX+mbdeka2FTEKKTNTJp1TWUFVUW6shiOyTw3k8teQr4iqzZnUEgW0vqLluY+0Z0nsvjgBUoVHVKdemQS4uodLlMw+7mFjbWT5wmaGhiqm7EYROaFNPDqzNnCdJMvabHM/ZZSESoyi4sCOrprYjTiOUw6IYf6eC8Sp//AGEv0s23L0ch4imjnvvnJvJWpY2addaqhFoPiqgIbMQ1JAe0FB06xeyx1IUHjYy50bUZa6U3qUqZz6YXDqLBhqetdWIBF7srO5NrgDWZuIxYZAK+JLrb/Kodld47Rso13q2fdaZz9I5VKUUWklrWT3iBsDOe0Ry0HKOeTrqOi6MqM2PNtAalRiL7szkj0nbgcpxHsZhGzioR2QGAPhbwG23Gx4Gdoz23zPV+WuPpJm5xw8h62MW43mW0ueKQ5xz8ooGDk4k+UK6CRk30hrhSd025GZxxjB9wEtrhrbSBFnUe6C3d89ggQpSY7pk+2IC4VrgEsyKN9tb379DNh6rngBy1P15zP6Twgq02RtpGhOtm2gwPLmgkS1iKLIzIwsymxHOQMs6MISsArJysErArskienylsrAZYFFsOOEiNCaJSAySYus00zAtNB0kbUpMNVkqMpBBII2Ebu47pfHTDHSoq1B+MXPgws3mTKjUZEUkxdaLDDuCVz02sTlNmUngDow8jNDBJ/wDH2Nd2L5lIzaXUDLvAs20j3m4znLTqfZ2or0zSK3ZWzqbE5VO0kBlJAN9l/eln2VteyPsymIVuscqim2QowYuRckDMLKQDextoLayl7R9Cmi7Krh1YG12VdSLOxDMCW4AchrNLohgKJc3RMzZXZAoOWyuerUrlXMUQdosWc30uJP0pgh26Qa1RFNQlk0tfIoFMhmCEqyFgSwOUnRiBR59QxtgAd2k7fpXJUwlM0lLOaCG+W7Z6Z6trb7Xokc808+envBmx0f04aaqpVmyKUUq+XQ1Os1BVgTmJ8CZm/JMRPiGUDOjLxupHx7/WPQxwNu+3mNPh6ybF9M06i5WStawFuvW1gb7DS4/pMqqaduyjqeLOregQS6nmNc4tPvDzkR6RQb79wMzkantKMTv7enkFv6w1rAe7TQcyC3oxYekejI06fSDtYIjOTewAJ2bdBfjLuAWpnz1CtgHARSD2mQqpNrjQm9mIOky0xVQgAtZdmUABdPwjsg8wJv8AQtRMwNVC67wGIP791xJtJI9G9lA7oKhstNbrTQa3bY1Rj9ptov32A39AbTL6OxKZF6uwS3ZCjQeG432y6rkzFdZ8RYCjhFkEFG74Uin6uKL62xpRh/zqD3VLb9B+uyA3SBP4fU27zoPWUwOEmRTNOYjVudvnc/sPAQ+sJ7oKqN8kFQd8AMnKPlknWco+dTA5/p3oEV7OpCuBbXYw3Xts75xePwD0myutuB2g9xnqJK/QletSVgVIVhwbZLKljysrBInc472WpNcoSh4DtL5bZzuO6CrU9SuZfvLr5jaJrUxjFYJWTEQcsqIssErJSsYrAgIglJMVjFYEBpyNqctZY2SBSalGo1HpuHQlSuoP1tHKXMsRSTF1rr7RpXTqq7NTQ5Sci5hmRmYa3uFu2i2NrcSSbHtD7WJWqitlD1FTIjKGpgXuzZhmJazO1teHjzjYdTuEA4QcIunwoF415dOFHCMMLM4bFVZIiywuGkyYaXDVVVMmROUu0sNLdPDiXEVcPSE1cNRtHp0eXnr6S5SogcfP6EY03vZvpDISje6xFidzc+RnaI3GebIh4+c7LoTEMaSe6xHZN9CLHTdwtOfUa5rdFQwQ5lYVd+U/XcTDFYDiO/T4yNLF4pU/mE+8vmI8Kx18oxqH6+RitcfodPXZ6RFTwv3fPfNOZut4iErg7jB04Ed9/wBYWYiBKo4/Qklhb9pVNQ8IJqNvgTmlz/SCDu2+UjDjvhnEcreEA2flHBkWfNtMIraBVxfRlGp76KTxGh8xOex3smdTSe/4W/8AYTqxU746knbYeNvSNTHmeLwL0zZ0ZeZGh7jslUiesNTUizbOFh67pk432bw76r2D+H5bJr0mPPMkXVzosb7MVU1S1QctD5GYtbDshsylTzFpdMVSkWSSERZZUQssYCT5I+WBAUjGnLGWMVgQZI+STBIgOGv1xgRqkkVBJFp8ZMqSAKdMy4iASNVkyLDSamstokgpS7h6RY2AJPKAyLOo6EFqQ02knv12+npKeC6FbRn0HDaT47BN+koAsAABp4THVbkCt5IHMdhaIAbdkyp8x+h+0UWkUDHRCd8IJHvHz8vKaYJVO6C68h8PWSF+cWYwISRzHr5xyoPD1ERXuiyc5QXV7reO34E+sXVJvNr/AFsvBZDBuRw8dfjIJhhyfdIPoYDIw+yfjIyzE7B4aemyOjsPtN8fhaBItQcImYbhHZMw1t9cz85GKWo289bfoRAa9/nJlpbN/cbyJUtqGv3kRw3AWgSPYc4D01cZStwdxF/jEb7zeEhtt+MKyMV7MUH1W6H8J08jsma/se1+zUXxUj9Z1YA4wrgb/X9o1McxQ9jh9uof6Vt6kmWv/wCUoAWJcnjmHytNw1CN/htv3AbY5zHl8fIfPwjaZHKYn2SABK1QPzj4kfKZ7ezOI+yisOIYC/cGsTO9RBttc8TqR3bh4WhkcZdpkeYYjoqonvo4/pNvMaGRhJ6oGi04Dyj0nl5aqiTU8Mze6rN3An4T0jLfYoHhJEEel8uBodDV22IR+ay+hN5q4f2WqH3nRe65+QnV6Ri/KTVxk4X2eRfeYueGwemvrNehQRBZVC92n94sw3xs1plU4aIvwkAblthoDCpADCCQb2jZ77IB6xQbxQMbNeSKOMA7IQmmBWIjq/dB4/XCD+0A8/fCtff9eMhXd9bpPS+cB8sDNEfn8IDbPrjAk0g5ButIx9ecsp9ekoVMONkJi0SfrBrb5ALG+pUE8wIKrrsHr+t4TQX2wDsOfdofjaGF2WsfP47INTYPCJNh7j+kAXexItry114G2zxtGS7bwO7U+ewfWsiT3U7h8DGx2wfW+FWFS2z+/edp8ZIjnf8A2iqe74fOMP1gS5oBcSMbPrhBXb9c4BXJ3QgkIbIuH1uhRKef13wwQeHz8YPDxjbz3wDLbrCORp9fCMu0xq36QBYAR0eG+yQ09n1wmRaUCIkCRtthJCnYExwnKEsc7PCA1hFI4oH/2Q==" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">{color}</h5>
                            <p className="card-text">
                              {' '}
                              {engine}
                            </p>
                            <Link to={`/cars/${id}`} className="btn btn-primary">see details</Link>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })
          }
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <h1 className="car-heading">Select the cars</h1>
      { displayCars }
    </div>
  );
};

export default CarList;
