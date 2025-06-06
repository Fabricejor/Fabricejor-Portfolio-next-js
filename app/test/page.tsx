import BlackHoleModel from "@/components/BlackHoleModel";

export default function TestPage() {
    return (
        <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
            {/* 
                Pour appliquer une texture, placez votre fichier de texture (ex: texture.jpg) 
                dans le dossier /public et passez le chemin comme prop:
                <BlackHoleModel texturePath="/texture.jpg" />
                
                Sans texture (utilise les matériaux originaux du modèle):
            */}
            <BlackHoleModel texturePath="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-yellow-black-hole-image_1199230.jpg" />
            
            {/* 
                Exemple avec texture (décommentez et remplacez par votre fichier de texture):
                <BlackHoleModel texturePath="/ma-texture.jpg" />
            */}
        </div>
    );
}
