export default function IconPlateNumber({
  width = 24,
  height = 13,
  color = '#000000',
  ...props
}: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.0498 3.48877C13.9167 3.48877 13.789 3.54164 13.6949 3.63575C13.6008 3.72985 13.5479 3.85749 13.5479 3.99058V5.49602L15.0534 3.48877H14.0498ZM4.01353 3.48877C3.88044 3.48877 3.7528 3.54164 3.6587 3.63575C3.56459 3.72985 3.51172 3.85749 3.51172 3.99058V5.49602L5.01715 3.48877H4.01353ZM5.01715 6.49964C5.15024 6.49964 5.27788 6.44677 5.37199 6.35266C5.4661 6.25855 5.51897 6.13092 5.51897 5.99783V4.49239L4.01353 6.49964H5.01715ZM15.5552 5.99783V4.49239L14.0498 6.49964H15.0534C15.1865 6.49964 15.3141 6.44677 15.4082 6.35266C15.5023 6.25855 15.5552 6.13092 15.5552 5.99783Z"
        fill={color}
      />
      <path
        d="M22.5797 0.478027H1.50362C1.23745 0.478027 0.98217 0.583766 0.793954 0.771982C0.605739 0.960198 0.5 1.21547 0.5 1.48165V11.5179C0.5 11.7841 0.605739 12.0393 0.793954 12.2276C0.98217 12.4158 1.23745 12.5215 1.50362 12.5215H22.5797C22.8459 12.5215 23.1012 12.4158 23.2894 12.2276C23.4776 12.0393 23.5833 11.7841 23.5833 11.5179V1.48165C23.5833 1.21547 23.4776 0.960198 23.2894 0.771982C23.1012 0.583766 22.8459 0.478027 22.5797 0.478027ZM7.52536 2.98709C7.52536 2.854 7.57823 2.72636 7.67234 2.63225C7.76645 2.53814 7.89409 2.48527 8.02717 2.48527C8.16026 2.48527 8.2879 2.53814 8.38201 2.63225C8.47612 2.72636 8.52899 2.854 8.52899 2.98709V3.99071C8.52899 4.1238 8.58185 4.25144 8.67596 4.34554C8.77007 4.43965 8.89771 4.49252 9.0308 4.49252H10.5362V2.98709C10.5362 2.854 10.5891 2.72636 10.6832 2.63225C10.7773 2.53814 10.905 2.48527 11.038 2.48527C11.1711 2.48527 11.2988 2.53814 11.3929 2.63225C11.487 2.72636 11.5399 2.854 11.5399 2.98709V7.00158C11.5399 7.13467 11.487 7.2623 11.3929 7.35641C11.2988 7.45052 11.1711 7.50339 11.038 7.50339C10.905 7.50339 10.7773 7.45052 10.6832 7.35641C10.5891 7.2623 10.5362 7.13467 10.5362 7.00158V5.49614H9.0308C8.63153 5.49614 8.24862 5.33754 7.96629 5.05521C7.68397 4.77289 7.52536 4.38997 7.52536 3.99071V2.98709ZM6.52174 5.99795C6.52174 6.39722 6.36313 6.78013 6.08081 7.06246C5.79848 7.34478 5.41557 7.50339 5.0163 7.50339H4.01268C3.61342 7.50339 3.2305 7.34478 2.94818 7.06246C2.66585 6.78013 2.50725 6.39722 2.50725 5.99795V3.99071C2.50725 3.59144 2.66585 3.20853 2.94818 2.9262C3.2305 2.64388 3.61342 2.48527 4.01268 2.48527H5.0163C5.41557 2.48527 5.79848 2.64388 6.08081 2.9262C6.36313 3.20853 6.52174 3.59144 6.52174 3.99071V5.99795ZM9.38708 10.158C9.48158 10.2525 9.53466 10.3806 9.53466 10.5143C9.53466 10.6479 9.48158 10.7761 9.38708 10.8705C9.29259 10.965 9.16443 11.0181 9.0308 11.0181C8.89716 11.0181 8.769 10.965 8.67451 10.8705L8.52899 10.72C8.36841 10.8856 8.26804 11.0161 8.02717 11.0161C7.9275 11.0167 7.82992 10.9875 7.74686 10.9324C7.6638 10.8773 7.59903 10.7987 7.56081 10.7067C7.52258 10.6146 7.51264 10.5133 7.53225 10.4156C7.55185 10.3178 7.60012 10.2282 7.67089 10.158L7.82143 10.0124L7.67089 9.86692C7.5764 9.77243 7.52331 9.64427 7.52331 9.51064C7.52331 9.377 7.5764 9.24884 7.67089 9.15435C7.76538 9.05986 7.89354 9.00677 8.02717 9.00677C8.16081 9.00677 8.28897 9.05986 8.38346 9.15435L8.52899 9.30489L8.67451 9.15435C8.769 9.05986 8.89716 9.00677 9.0308 9.00677C9.16443 9.00677 9.29259 9.05986 9.38708 9.15435C9.48158 9.24884 9.53466 9.377 9.53466 9.51064C9.53466 9.64427 9.48158 9.77243 9.38708 9.86692L9.23654 10.0124L9.38708 10.158ZM13.0453 10.5143H11.038C10.905 10.5143 10.7773 10.4614 10.6832 10.3673C10.5891 10.2732 10.5362 10.1455 10.5362 10.0124C10.5362 9.87936 10.5891 9.75172 10.6832 9.65761C10.7773 9.5635 10.905 9.51064 11.038 9.51064H13.0453C13.1784 9.51064 13.306 9.5635 13.4001 9.65761C13.4942 9.75172 13.5471 9.87936 13.5471 10.0124C13.5471 10.1455 13.4942 10.2732 13.4001 10.3673C13.306 10.4614 13.1784 10.5143 13.0453 10.5143ZM12.5435 5.99795V3.99071C12.5435 3.59144 12.7021 3.20853 12.9844 2.9262C13.2667 2.64388 13.6496 2.48527 14.0489 2.48527H15.0525C15.4518 2.48527 15.8347 2.64388 16.117 2.9262C16.3994 3.20853 16.558 3.59144 16.558 3.99071V5.99795C16.558 6.39722 16.3994 6.78013 16.117 7.06246C15.8347 7.34478 15.4518 7.50339 15.0525 7.50339H14.0489C13.6496 7.50339 13.2667 7.34478 12.9844 7.06246C12.7021 6.78013 12.5435 6.39722 12.5435 5.99795ZM16.4124 10.158C16.5069 10.2525 16.56 10.3806 16.56 10.5143C16.56 10.6479 16.5069 10.7761 16.4124 10.8705C16.318 10.965 16.1898 11.0181 16.0562 11.0181C15.9225 11.0181 15.7944 10.965 15.6999 10.8705L15.5543 10.72C15.3938 10.8856 15.2934 11.0161 15.0525 11.0161C14.9529 11.0167 14.8553 10.9875 14.7722 10.9324C14.6892 10.8773 14.6244 10.7987 14.5862 10.7067C14.5479 10.6146 14.538 10.5133 14.5576 10.4156C14.5772 10.3178 14.6255 10.2282 14.6963 10.158L14.8468 10.0124L14.6963 9.86692C14.6495 9.82013 14.6123 9.76459 14.587 9.70346C14.5617 9.64232 14.5487 9.5768 14.5487 9.51064C14.5487 9.44447 14.5617 9.37895 14.587 9.31781C14.6123 9.25668 14.6495 9.20114 14.6963 9.15435C14.743 9.10756 14.7986 9.07045 14.8597 9.04513C14.9208 9.0198 14.9864 9.00677 15.0525 9.00677C15.1187 9.00677 15.1842 9.0198 15.2454 9.04513C15.3065 9.07045 15.362 9.10756 15.4088 9.15435L15.5543 9.30489L15.6999 9.15435C15.7944 9.05986 15.9225 9.00677 16.0562 9.00677C16.1898 9.00677 16.318 9.05986 16.4124 9.15435C16.5069 9.24884 16.56 9.377 16.56 9.51064C16.56 9.64427 16.5069 9.77243 16.4124 9.86692L16.2619 10.0124L16.4124 10.158ZM20.5725 4.49252C20.8386 4.49252 21.0939 4.59826 21.2821 4.78647C21.4704 4.97469 21.5761 5.22997 21.5761 5.49614V6.49977C21.5761 6.76594 21.4704 7.02122 21.2821 7.20943C21.0939 7.39765 20.8386 7.50339 20.5725 7.50339H18.0634C17.9303 7.50339 17.8027 7.45052 17.7086 7.35641C17.6145 7.2623 17.5616 7.13467 17.5616 7.00158C17.5616 6.86849 17.6145 6.74085 17.7086 6.64674C17.8027 6.55264 17.9303 6.49977 18.0634 6.49977H20.5725V5.49614H18.5652C18.299 5.49614 18.0438 5.3904 17.8555 5.20219C17.6673 5.01397 17.5616 4.7587 17.5616 4.49252V3.4889C17.5616 3.22272 17.6673 2.96744 17.8555 2.77923C18.0438 2.59101 18.299 2.48527 18.5652 2.48527H21.0743C21.2074 2.48527 21.335 2.53814 21.4291 2.63225C21.5232 2.72636 21.5761 2.854 21.5761 2.98709C21.5761 3.12017 21.5232 3.24781 21.4291 3.34192C21.335 3.43603 21.2074 3.4889 21.0743 3.4889H18.5652V4.49252H20.5725Z"
        fill={color}
      />
    </svg>
  )
}
