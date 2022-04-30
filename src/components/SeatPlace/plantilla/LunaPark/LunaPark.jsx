import React from "react";
import styles from "./LunaPark.module.css";
import { useState } from "react";

export default function LunaPark({handleonClick}) {

  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="681"
    height="280"
    fill="none"
    viewBox="0 0 681 280"
  >
    <path
      fill="#FFA800"
      stroke="#000"
      strokeLinejoin="bevel"
      strokeWidth="2"
      d="M126 173V14.145L549 14v159H126z"
      id="Categoria 1"
      onClick={(e)=>handleonClick(e)}
    ></path>
    <path
      fill="#000"
      d="M272.321 101V90.09h3.686c.856 0 1.556.155 2.099.464.547.306.952.72 1.214 1.242.263.521.394 1.104.394 1.747a3.86 3.86 0 01-.394 1.752c-.259.526-.66.945-1.204 1.257-.543.31-1.239.464-2.088.464h-2.642v-1.172h2.6c.586 0 1.056-.101 1.411-.304.355-.202.613-.476.773-.82.163-.348.245-.74.245-1.177 0-.437-.082-.828-.245-1.172a1.748 1.748 0 00-.778-.81c-.359-.199-.834-.298-1.428-.298h-2.322V101h-1.321zm16.681-10.91h1.321v7.224c0 .746-.176 1.412-.528 1.997a3.693 3.693 0 01-1.475 1.38c-.636.334-1.382.501-2.237.501-.856 0-1.602-.167-2.238-.501a3.726 3.726 0 01-1.48-1.38c-.348-.586-.522-1.251-.522-1.997V90.09h1.321v7.116c0 .533.117 1.007.351 1.423.234.412.568.737 1.002.974.436.235.958.352 1.566.352.607 0 1.129-.117 1.566-.352a2.48 2.48 0 001.001-.974c.234-.416.352-.89.352-1.423v-7.116zm3.959 10.91V90.09h1.321v9.738h5.071V101h-6.392zm8.437 0V90.09h1.321v9.738h5.071V101h-6.392zm8.438-10.91h1.576l3.708 9.056h.128l3.707-9.055h1.577V101h-1.236v-8.288h-.107L315.78 101h-1.193l-3.409-8.288h-.107V101h-1.235V90.09zM323.628 101h-1.385l4.006-10.91h1.363l4.006 10.91h-1.385l-3.26-9.183h-.085l-3.26 9.183zm.511-4.261h5.583v1.171h-5.583V96.74zm17.829-6.648V101h-1.279l-5.944-8.565h-.107V101h-1.321V90.09h1.279l5.965 8.588h.107V90.09h1.3zM348.83 101V90.09h1.321v9.738h5.071V101h-6.392zm9.573 0h-1.385l4.006-10.91h1.364l4.005 10.91h-1.385l-3.26-9.183h-.085l-3.26 9.183zm.512-4.261h5.582v1.171h-5.582V96.74zm7.307-5.476V90.09h8.181v1.172h-3.43V101h-1.321v-9.737h-3.43zm10.22 9.737V90.09h6.584v1.173h-5.263v3.686h4.922v1.172h-4.922v3.707h5.348V101h-6.669zm8.965 0V90.09h3.686c.852 0 1.552.147 2.099.438.547.287.951.683 1.214 1.188.263.504.394 1.077.394 1.72s-.131 1.213-.394 1.71c-.263.497-.666.888-1.209 1.172-.543.28-1.237.42-2.083.42h-2.983v-1.192h2.941c.582 0 1.051-.086 1.406-.256.359-.17.618-.412.778-.725.163-.316.245-.692.245-1.129 0-.437-.082-.819-.245-1.145a1.677 1.677 0 00-.783-.757c-.359-.18-.833-.271-1.423-.271h-2.322V101h-1.321zm5.135-4.9l2.685 4.9h-1.535l-2.642-4.9h1.492zm4.907 4.9h-1.385l4.006-10.91h1.364l4.005 10.91h-1.385l-3.26-9.183h-.085l-3.26 9.183zm.511-4.261h5.583v1.171h-5.583V96.74zm9.178 4.261V90.09h1.321v9.738h5.071V101h-6.392z"
    ></path>
    <path
      fill="#206DE1"
      stroke="#000"
      strokeLinejoin="bevel"
      strokeWidth="2"
      d="M108.5 16v101.5H1V1h93.5l14 15z"
      id="Categoria 2"
      onClick={(e)=>handleonClick(e)}
    ></path>
    <path
      fill="#fff"
      d="M31.753 52.5h-1.145a2.381 2.381 0 00-.965-1.496 2.586 2.586 0 00-.79-.387c-.289-.087-.59-.13-.904-.13-.573 0-1.091.145-1.556.434-.462.29-.83.716-1.103 1.279-.271.563-.406 1.254-.406 2.073 0 .818.135 1.51.406 2.072.274.564.642.99 1.103 1.28.465.289.983.433 1.556.433.314 0 .615-.043.905-.129.289-.086.552-.214.79-.383a2.427 2.427 0 00.965-1.5h1.144a3.814 3.814 0 01-.471 1.297c-.228.381-.51.706-.85.974a3.721 3.721 0 01-1.14.605 4.25 4.25 0 01-1.343.207c-.807 0-1.524-.197-2.151-.59-.628-.395-1.122-.955-1.482-1.681-.36-.726-.54-1.588-.54-2.585 0-.997.18-1.86.54-2.586.36-.726.854-1.286 1.482-1.68.627-.394 1.345-.59 2.15-.59.478 0 .926.068 1.344.207.422.138.802.342 1.14.61.34.264.622.587.85.969.228.378.385.81.47 1.297zM33.99 59h-1.2l3.471-9.455h1.182L40.915 59h-1.2l-2.825-7.959h-.074L33.991 59zm.443-3.693h4.838v1.015h-4.838v-1.015zM42.388 59v-9.455h3.305c.66 0 1.202.114 1.63.342.428.225.746.528.956.91.209.378.314.798.314 1.26 0 .406-.073.741-.217 1.006-.142.265-.33.474-.564.628-.23.154-.481.268-.752.342v.092c.29.019.58.12.872.305.293.184.537.449.734.794.197.344.296.766.296 1.265 0 .474-.108.9-.323 1.278-.216.379-.556.679-1.02.9-.465.222-1.07.333-1.815.333h-3.416zm1.145-1.016h2.271c.748 0 1.279-.144 1.593-.434.317-.292.475-.646.475-1.061 0-.32-.081-.616-.244-.887a1.771 1.771 0 00-.697-.655c-.302-.166-.659-.25-1.071-.25h-2.327v3.287zm0-4.284h2.123c.345 0 .656-.067.933-.203.28-.135.502-.326.665-.572.166-.246.25-.536.25-.868 0-.416-.145-.768-.435-1.057-.29-.293-.748-.439-1.376-.439h-2.16v3.14zm7.31 5.3v-9.455h5.706v1.016h-4.561v3.195h4.266v1.015h-4.266v3.213h4.635V59h-5.78zm15.378-6.5h-1.145a2.381 2.381 0 00-.965-1.496 2.586 2.586 0 00-.79-.387c-.289-.087-.59-.13-.904-.13-.573 0-1.091.145-1.556.434-.462.29-.83.716-1.103 1.279-.271.563-.407 1.254-.407 2.073 0 .818.136 1.51.407 2.072.273.564.641.99 1.103 1.28.465.289.983.433 1.556.433.314 0 .615-.043.904-.129.29-.086.553-.214.79-.383a2.427 2.427 0 00.965-1.5h1.145a3.814 3.814 0 01-.471 1.297c-.228.381-.511.706-.85.974a3.72 3.72 0 01-1.14.605 4.25 4.25 0 01-1.343.207c-.807 0-1.524-.197-2.152-.59-.627-.395-1.121-.955-1.482-1.681-.36-.726-.54-1.588-.54-2.585 0-.997.18-1.86.54-2.586.36-.726.855-1.286 1.482-1.68.628-.394 1.345-.59 2.152-.59.477 0 .925.068 1.343.207.422.138.802.342 1.14.61.339.264.622.587.85.969.228.378.384.81.47 1.297zm1.85 6.5v-9.455h5.706v1.016h-4.561v3.195h4.265v1.015h-4.265v3.213h4.635V59h-5.78zm7.77 0v-9.455h3.194c.738 0 1.345.127 1.819.379.474.25.825.593 1.052 1.03.228.437.342.934.342 1.49 0 .558-.114 1.052-.342 1.482-.228.431-.577.77-1.048 1.016-.47.243-1.072.365-1.805.365h-2.585v-1.034h2.548c.505 0 .911-.074 1.22-.222a1.4 1.4 0 00.673-.628c.142-.274.212-.6.212-.978 0-.379-.07-.71-.212-.993a1.448 1.448 0 00-.678-.655c-.311-.157-.722-.236-1.233-.236h-2.013V59H75.84zm4.45-4.247L82.616 59h-1.33l-2.29-4.247h1.293zM84.542 59h-1.2l3.472-9.455h1.181L91.468 59h-1.2l-2.825-7.959h-.074L84.543 59zm.444-3.693h4.838v1.015h-4.838v-1.015z"
    ></path>
    <path
      fill="#3BA7E3"
      stroke="#000"
      strokeLinejoin="bevel"
      strokeWidth="2"
      d="M201 185v86.5l-150-1-39-39H1V126h107.5v39l-24 25 32 31.5L153 185h48z"
      id="Categoria 3"
      onClick={(e)=>handleonClick(e)}
    ></path>
    <path
      fill="#fff"
      d="M31.233 222v-10.182h3.44c.8 0 1.452.144 1.96.433.51.285.887.671 1.133 1.158.245.487.367 1.031.367 1.631a3.6 3.6 0 01-.367 1.635 2.735 2.735 0 01-1.124 1.174c-.507.288-1.157.432-1.949.432h-2.466v-1.093h2.426c.547 0 .986-.095 1.318-.284a1.69 1.69 0 00.72-.766c.153-.324.23-.691.23-1.098 0-.408-.077-.772-.23-1.094a1.638 1.638 0 00-.725-.756c-.335-.185-.779-.278-1.333-.278h-2.167V222h-1.233zm15.568-10.182h1.233v6.742c0 .696-.164 1.317-.492 1.864a3.446 3.446 0 01-1.377 1.288c-.593.311-1.29.467-2.088.467-.799 0-1.495-.156-2.088-.467a3.48 3.48 0 01-1.382-1.288c-.325-.547-.487-1.168-.487-1.864v-6.742h1.233v6.642c0 .497.109.94.328 1.328.219.384.53.687.934.909.408.219.895.329 1.462.329s1.054-.11 1.462-.329c.407-.222.719-.525.934-.909.22-.388.328-.831.328-1.328v-6.642zM50.497 222v-10.182h1.233v9.088h4.733V222h-5.966zm7.875 0v-10.182h1.233v9.088h4.733V222h-5.966zm7.875-10.182h1.471l3.46 8.452h.12l3.46-8.452h1.472V222h-1.154v-7.736h-.1L71.796 222H70.68l-3.181-7.736h-.1V222h-1.153v-10.182zM79.119 222h-1.292l3.738-10.182h1.273L86.577 222h-1.293l-3.043-8.571h-.08L79.12 222zm.478-3.977h5.21v1.093h-5.21v-1.093zm16.64-6.205V222h-1.194l-5.548-7.994h-.1V222h-1.232v-10.182h1.193l5.568 8.014h.1v-8.014h1.213zM31.233 239v-10.182h1.233v9.088h4.733V239h-5.966zm8.935 0h-1.292l3.738-10.182h1.273L47.626 239h-1.293l-3.043-8.571h-.08L40.169 239zm.477-3.977h5.21v1.093h-5.21v-1.093zm6.82-5.111v-1.094h7.637v1.094H51.9V239h-1.233v-9.088h-3.202zm9.54 9.088v-10.182h6.144v1.094h-4.912v3.44h4.594v1.094h-4.594v3.46h4.992V239h-6.225zm8.367 0v-10.182h3.44c.795 0 1.448.136 1.959.408.51.268.888.638 1.133 1.109.246.47.368 1.005.368 1.605 0 .6-.122 1.132-.368 1.596-.245.464-.621.829-1.128 1.094-.507.262-1.155.393-1.944.393h-2.784v-1.114h2.744c.544 0 .981-.079 1.313-.239.334-.159.576-.384.725-.676.153-.295.23-.646.23-1.054 0-.407-.077-.764-.23-1.069a1.564 1.564 0 00-.73-.706c-.335-.169-.778-.253-1.328-.253h-2.167V239h-1.233zm4.792-4.574L72.67 239h-1.432l-2.466-4.574h1.392zm4.58 4.574h-1.292l3.738-10.182h1.273L82.202 239h-1.293l-3.043-8.571h-.08L74.745 239zm.478-3.977h5.21v1.093h-5.21v-1.093zM83.788 239v-10.182h1.233v9.088h4.733V239h-5.966z"
    ></path>
    <path
      fill="#397A6E"
      stroke="#000"
      strokeLinejoin="bevel"
      strokeWidth="2"
      d="M466.983 180v91.724L210 271.241V180h256.983z"
      id="Categoria 4"
      onClick={(e)=>handleonClick(e)}
    ></path>
    <path
      fill="#fff"
      d="M279.826 230.69v-10.182h3.441c.798 0 1.451.144 1.958.432.511.285.889.672 1.134 1.159.245.487.368 1.031.368 1.63 0 .6-.123 1.146-.368 1.636a2.73 2.73 0 01-1.124 1.173c-.507.289-1.156.433-1.949.433h-2.466v-1.094h2.427c.547 0 .986-.094 1.317-.283.332-.189.572-.444.721-.766.152-.325.229-.691.229-1.099 0-.407-.077-.772-.229-1.093a1.627 1.627 0 00-.726-.756c-.335-.186-.779-.278-1.332-.278h-2.168v9.088h-1.233zm15.569-10.182h1.233v6.741c0 .696-.164 1.318-.493 1.865a3.44 3.44 0 01-1.377 1.287c-.593.312-1.289.468-2.088.468-.798 0-1.495-.156-2.088-.468a3.486 3.486 0 01-1.382-1.287c-.325-.547-.487-1.169-.487-1.865v-6.741h1.233v6.642c0 .497.109.94.328 1.327.219.385.53.688.935.91.407.219.895.328 1.461.328.567 0 1.054-.109 1.462-.328a2.31 2.31 0 00.935-.91 2.66 2.66 0 00.328-1.327v-6.642zm3.695 10.182v-10.182h1.233v9.088h4.733v1.094h-5.966zm7.875 0v-10.182h1.233v9.088h4.733v1.094h-5.966zm7.875-10.182h1.471l3.461 8.452h.119l3.46-8.452h1.472v10.182h-1.154v-7.736h-.099l-3.182 7.736h-1.113l-3.182-7.736h-.1v7.736h-1.153v-10.182zm12.873 10.182h-1.293l3.739-10.182h1.272l3.739 10.182h-1.293l-3.042-8.571h-.08l-3.042 8.571zm.477-3.978h5.21v1.094h-5.21v-1.094zm16.64-6.204v10.182h-1.193l-5.549-7.995h-.099v7.995h-1.233v-10.182h1.193l5.568 8.014h.1v-8.014h1.213zm14.598 3.182h-1.233a2.566 2.566 0 00-1.039-1.611 2.79 2.79 0 00-.851-.418 3.383 3.383 0 00-.974-.139c-.617 0-1.175.156-1.675.467-.498.312-.894.771-1.189 1.378-.291.606-.437 1.35-.437 2.232 0 .881.146 1.625.437 2.232.295.607.691 1.066 1.189 1.377.5.312 1.058.467 1.675.467.338 0 .663-.046.974-.139a2.87 2.87 0 00.851-.412 2.64 2.64 0 00.656-.681c.182-.272.31-.584.383-.935h1.233a4.1 4.1 0 01-.508 1.397c-.245.411-.55.761-.914 1.049a4.009 4.009 0 01-1.228.651 4.583 4.583 0 01-1.447.224c-.868 0-1.641-.212-2.317-.636-.676-.425-1.208-1.028-1.596-1.81-.387-.782-.581-1.71-.581-2.784 0-1.074.194-2.002.581-2.784.388-.783.92-1.386 1.596-1.81.676-.424 1.449-.636 2.317-.636.514 0 .996.074 1.447.223.454.15.863.368 1.228.657.364.285.669.633.914 1.044.246.407.415.873.508 1.397zm1.992 7v-10.182h6.145v1.094h-4.912v3.44h4.594v1.094h-4.594v3.46h4.991v1.094h-6.224zm16.441-10.182v10.182h-1.193l-5.548-7.995h-.1v7.995h-1.233v-10.182h1.193l5.568 8.014h.1v-8.014h1.213zm1.91 1.094v-1.094h7.637v1.094h-3.202v9.088h-1.233v-9.088h-3.202zm9.54 9.088v-10.182h3.44c.795 0 1.448.136 1.959.408.51.268.888.638 1.133 1.108.245.471.368 1.006.368 1.606 0 .6-.123 1.132-.368 1.596-.245.464-.621.828-1.128 1.094-.507.261-1.155.392-1.944.392h-2.784v-1.113h2.744c.544 0 .981-.08 1.313-.239.334-.159.576-.384.725-.676.153-.295.229-.646.229-1.054 0-.408-.076-.764-.229-1.069a1.56 1.56 0 00-.73-.706c-.335-.169-.778-.253-1.328-.253h-2.167v9.088h-1.233zm4.792-4.574l2.506 4.574h-1.432l-2.466-4.574h1.392zm4.58 4.574h-1.292l3.738-10.182h1.273l3.739 10.182h-1.293l-3.043-8.571h-.079l-3.043 8.571zm.478-3.978h5.21v1.094h-5.21v-1.094zm8.566 3.978v-10.182h1.233v9.088h4.732v1.094h-5.965z"
    ></path>
    <path
      fill="#206DE1"
      stroke="#000"
      strokeLinejoin="bevel"
      strokeWidth="2"
      d="M676 1v116H567V16l15-15h94z"
      id="Categoria 2"
      onClick={(e)=>handleonClick(e)}
    ></path>
    <path
      fill="#fff"
      d="M598.753 55.5h-1.145a2.373 2.373 0 00-.356-.868 2.362 2.362 0 00-.609-.628 2.587 2.587 0 00-.789-.387 3.156 3.156 0 00-.905-.13c-.573 0-1.091.145-1.556.434-.462.29-.829.716-1.103 1.279-.271.563-.406 1.254-.406 2.073 0 .818.135 1.51.406 2.072.274.564.641.99 1.103 1.28.465.289.983.433 1.556.433.314 0 .615-.043.905-.129a2.65 2.65 0 00.789-.383 2.43 2.43 0 00.965-1.5h1.145a3.805 3.805 0 01-.471 1.297 3.559 3.559 0 01-.849.974 3.727 3.727 0 01-1.141.605 4.245 4.245 0 01-1.343.207c-.806 0-1.524-.197-2.151-.59-.628-.395-1.122-.955-1.482-1.681-.36-.726-.54-1.588-.54-2.585 0-.997.18-1.86.54-2.586.36-.726.854-1.286 1.482-1.68.627-.394 1.345-.59 2.151-.59.477 0 .925.068 1.343.207.422.138.802.342 1.141.61.338.264.621.587.849.969.228.378.385.81.471 1.297zm2.238 6.5h-1.201l3.472-9.455h1.182L607.915 62h-1.2l-2.825-7.959h-.074L600.991 62zm.443-3.693h4.838v1.015h-4.838v-1.015zM609.388 62v-9.455h3.305c.659 0 1.202.114 1.63.342.428.225.746.528.956.91.209.378.314.798.314 1.26 0 .406-.073.741-.217 1.006-.142.265-.33.474-.564.628-.23.154-.481.268-.752.342v.092c.289.019.58.12.872.305.293.184.537.449.734.794.197.344.296.766.296 1.265 0 .474-.108.9-.323 1.278-.216.379-.556.679-1.02.9-.465.222-1.07.333-1.815.333h-3.416zm1.145-1.016h2.271c.748 0 1.279-.144 1.593-.434.317-.292.475-.646.475-1.061 0-.32-.081-.616-.244-.887a1.774 1.774 0 00-.697-.655c-.302-.166-.659-.25-1.071-.25h-2.327v3.287zm0-4.284h2.124c.344 0 .655-.067.932-.203.28-.135.502-.326.665-.572.166-.246.249-.536.249-.868a1.44 1.44 0 00-.434-1.057c-.289-.293-.748-.439-1.376-.439h-2.16v3.14zm7.31 5.3v-9.455h5.706v1.016h-4.561v3.195h4.266v1.015h-4.266v3.213h4.635V62h-5.78zm15.378-6.5h-1.145a2.373 2.373 0 00-.356-.868 2.582 2.582 0 00-1.399-1.016 3.144 3.144 0 00-.904-.129c-.573 0-1.091.145-1.556.434-.462.29-.83.716-1.103 1.279-.271.563-.407 1.254-.407 2.073 0 .818.136 1.51.407 2.072.273.564.641.99 1.103 1.28.465.289.983.433 1.556.433.314 0 .615-.043.904-.129.29-.086.553-.214.79-.383a2.43 2.43 0 00.965-1.5h1.145a3.848 3.848 0 01-.471 1.297 3.545 3.545 0 01-1.99 1.578 4.25 4.25 0 01-1.343.208c-.807 0-1.524-.197-2.152-.59-.627-.395-1.121-.955-1.482-1.681-.36-.726-.54-1.588-.54-2.585 0-.997.18-1.86.54-2.586.361-.726.855-1.286 1.482-1.68.628-.394 1.345-.59 2.152-.59.477 0 .924.068 1.343.207.422.138.802.342 1.14.61.339.264.622.587.85.969.227.378.384.81.471 1.297zm1.85 6.5v-9.455h5.706v1.016h-4.561v3.195h4.265v1.015h-4.265v3.213h4.634V62h-5.779zm7.769 0v-9.455h3.195c.738 0 1.345.127 1.819.379.474.25.825.593 1.052 1.03.228.437.342.934.342 1.49 0 .558-.114 1.052-.342 1.482-.227.431-.577.77-1.048 1.016-.471.243-1.072.365-1.805.365h-2.585v-1.034h2.548c.505 0 .911-.074 1.219-.222.311-.148.536-.357.674-.628.142-.274.212-.6.212-.978 0-.379-.07-.71-.212-.993a1.445 1.445 0 00-.679-.655c-.31-.157-.721-.236-1.232-.236h-2.013V62h-1.145zm4.45-4.247L649.617 62h-1.329l-2.29-4.247h1.292zM651.543 62h-1.2l3.472-9.455h1.182L658.468 62h-1.2l-2.825-7.959h-.074L651.543 62zm.444-3.693h4.838v1.015h-4.838v-1.015z"
    ></path>
    <g filter="url(#filter0_d_23_8)">
      <path
        fill="#3BA7E3"
        d="M476 184v87h150l40-41h10V126H568v38.5l24 25-32 31.5-36.5-37H476z"
        id="Categoria 3"
        onClick={(e)=>handleonClick(e)}
      ></path>
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M476 184v87h150l40-41h10V126H568v38.5l24 25-32 31.5-36.5-37H476z"
        id="Categoria 3"
        onClick={(e)=>handleonClick(e)}
      ></path>
    </g>
    <path
      fill="#fff"
      d="M585.233 225v-10.182h3.44c.799 0 1.452.144 1.959.433a2.71 2.71 0 011.134 1.158c.245.487.368 1.031.368 1.631 0 .6-.123 1.145-.368 1.635a2.737 2.737 0 01-1.124 1.174c-.507.288-1.157.432-1.949.432h-2.466v-1.093h2.426c.547 0 .986-.095 1.318-.284a1.69 1.69 0 00.721-.766c.152-.324.228-.691.228-1.098a2.53 2.53 0 00-.228-1.094 1.636 1.636 0 00-.726-.756c-.335-.185-.779-.278-1.332-.278h-2.168V225h-1.233zm15.568-10.182h1.233v6.742c0 .696-.164 1.317-.492 1.864a3.448 3.448 0 01-1.377 1.288c-.593.311-1.289.467-2.088.467-.799 0-1.495-.156-2.088-.467a3.481 3.481 0 01-1.382-1.288c-.325-.547-.487-1.168-.487-1.864v-6.742h1.233v6.642c0 .497.109.94.328 1.328.219.384.53.687.934.909.408.219.895.329 1.462.329s1.054-.11 1.462-.329c.407-.222.719-.525.934-.909.219-.388.328-.831.328-1.328v-6.642zM604.497 225v-10.182h1.233v9.088h4.733V225h-5.966zm7.875 0v-10.182h1.233v9.088h4.733V225h-5.966zm7.875-10.182h1.471l3.46 8.452h.12l3.46-8.452h1.472V225h-1.154v-7.736h-.099L625.795 225h-1.114l-3.182-7.736h-.099V225h-1.153v-10.182zM633.119 225h-1.292l3.738-10.182h1.273L640.577 225h-1.293l-3.043-8.571h-.079L633.119 225zm.478-3.977h5.21v1.093h-5.21v-1.093zm16.64-6.205V225h-1.194l-5.548-7.994h-.099V225h-1.233v-10.182h1.193l5.568 8.014h.099v-8.014h1.214zM585.233 242v-10.182h1.233v9.088h4.733V242h-5.966zm8.935 0h-1.292l3.738-10.182h1.273L601.626 242h-1.293l-3.043-8.571h-.079L594.168 242zm.477-3.977h5.211v1.093h-5.211v-1.093zm6.82-5.111v-1.094h7.637v1.094H605.9V242h-1.233v-9.088h-3.202zm9.539 9.088v-10.182h6.145v1.094h-4.912v3.44h4.594v1.094h-4.594v3.46h4.992V242h-6.225zm8.368 0v-10.182h3.44c.795 0 1.448.136 1.959.408.51.268.888.638 1.133 1.109.246.47.368 1.005.368 1.605 0 .6-.122 1.132-.368 1.596-.245.464-.621.829-1.128 1.094-.507.262-1.155.393-1.944.393h-2.784v-1.114h2.744c.544 0 .981-.079 1.313-.239.334-.159.576-.384.725-.676.153-.295.229-.646.229-1.054 0-.407-.076-.764-.229-1.069a1.564 1.564 0 00-.73-.706c-.335-.169-.778-.253-1.328-.253h-2.167V242h-1.233zm4.792-4.574L626.67 242h-1.432l-2.466-4.574h1.392zm4.58 4.574h-1.292l3.738-10.182h1.273L636.202 242h-1.293l-3.043-8.571h-.079L628.744 242zm.478-3.977h5.21v1.093h-5.21v-1.093zm8.566 3.977v-10.182h1.233v9.088h4.733V242h-5.966z"
    ></path>
    <defs>
      <filter
        id="filter0_d_23_8"
        width="210"
        height="155"
        x="471"
        y="125"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_23_8"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_23_8"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);
}

 