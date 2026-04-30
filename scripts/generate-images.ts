import Replicate from "replicate";
import fs from "fs";
import path from "path";
import { Readable } from "stream";
import { finished } from "stream/promises";

const replicate = new Replicate();

interface ImageTask {
  key: string;
  prompt: string;
  outputPath: string;
  width: number;
  height: number;
}

const tasks: ImageTask[] = [
  // Hero homepage
  {
    key: "hero",
    prompt:
      "Beautiful aerial view of a modern French house with a lush green garden, manicured lawn, stone terrace with outdoor furniture, blooming flower beds, natural landscape, warm golden hour sunlight, editorial photography style, 8k quality",
    outputPath: "public/images/hero.webp",
    width: 1344,
    height: 768,
  },
  // Categories
  {
    key: "cat-amenagement",
    prompt:
      "Beautiful French garden landscape design, stone pathway winding through lush green plants and flowers, wooden pergola, outdoor lighting, Mediterranean style, professional landscape photography, natural light, 8k",
    outputPath: "public/images/categories/amenagement-exterieur.webp",
    width: 768,
    height: 512,
  },
  {
    key: "cat-travaux",
    prompt:
      "Modern home renovation in progress, bright interior with exposed brick wall, new wooden floor being installed, professional tools neatly arranged, natural window light, clean and organized workspace, architectural photography, 8k",
    outputPath: "public/images/categories/travaux-renovation.webp",
    width: 768,
    height: 512,
  },
  {
    key: "cat-decoration",
    prompt:
      "Elegant Scandinavian living room interior, light wood furniture, green houseplants, soft natural linen textiles, minimalist decor, large windows with natural light, cozy atmosphere, interior design photography, 8k",
    outputPath: "public/images/categories/decoration-interieure.webp",
    width: 768,
    height: 512,
  },
  {
    key: "cat-energie",
    prompt:
      "Modern eco-friendly house with solar panels on roof, green garden, energy efficient windows, heat pump unit visible, blue sky, sustainable architecture, professional real estate photography, 8k",
    outputPath: "public/images/categories/energie-isolation.webp",
    width: 768,
    height: 512,
  },
  // Blog articles
  {
    key: "blog-jardin",
    prompt:
      "Charming small urban garden, compact but beautifully designed, raised wooden planters with herbs and flowers, string lights, small bistro table, vertical green wall, cozy atmosphere, garden photography, 8k",
    outputPath: "public/images/blog/amenager-petit-jardin.webp",
    width: 1024,
    height: 576,
  },
  {
    key: "blog-sdb",
    prompt:
      "Modern minimalist bathroom renovation, walk-in shower with large format tiles, floating vanity, round mirror, warm wood accents, green plant, natural light from frosted window, interior photography, 8k",
    outputPath: "public/images/blog/renover-salle-de-bain-budget.webp",
    width: 1024,
    height: 576,
  },
  // About page
  {
    key: "about",
    prompt:
      "Team of landscape architects and home renovation experts working together at a wooden table, blueprints and plant samples, bright modern office with green plants, natural light, professional team photography, 8k",
    outputPath: "public/images/about.webp",
    width: 1024,
    height: 576,
  },
  // New blog articles
  {
    key: "blog-isoler-combles",
    prompt:
      "Attic insulation being installed, worker in protective gear rolling out mineral wool insulation between wooden roof beams, bright attic space with skylight, professional construction photography, 8k",
    outputPath: "public/images/blog/isoler-combles-guide.webp",
    width: 1024,
    height: 576,
  },
  {
    key: "blog-pompe-chaleur",
    prompt:
      "Modern heat pump unit installed next to a contemporary French house, well-maintained garden, clean white unit against stone wall, energy efficient home, professional architectural photography, blue sky, 8k",
    outputPath: "public/images/blog/pompe-a-chaleur-guide.webp",
    width: 1024,
    height: 576,
  },
  {
    key: "blog-terrasse-bois",
    prompt:
      "Beautiful wooden deck terrace in a French garden, composite or exotic wood planks, outdoor dining furniture, potted plants, string lights, warm sunset light, professional garden photography, 8k",
    outputPath: "public/images/blog/terrasse-bois-guide.webp",
    width: 1024,
    height: 576,
  },
  {
    key: "blog-isolation-exterieure",
    prompt:
      "Exterior wall insulation being installed on a house facade, scaffolding, worker applying polystyrene panels on wall, partially finished modern render, professional construction photography, 8k",
    outputPath: "public/images/blog/prix-isolation-exterieure.webp",
    width: 1024,
    height: 576,
  },
  {
    key: "blog-laine-comparatif",
    prompt:
      "Close-up of mineral wool insulation rolls, yellow glass wool and grey rock wool side by side, construction materials on clean workbench, professional product photography, soft studio lighting, 8k",
    outputPath: "public/images/blog/laine-verre-laine-roche-comparatif.webp",
    width: 1024,
    height: 576,
  },
  {
    key: "blog-cloture-jardin",
    prompt:
      "Elegant garden fence with wooden slats and metal posts, lush green garden behind, gravel pathway, blooming flowers along the fence, French countryside style, professional landscape photography, 8k",
    outputPath: "public/images/blog/cloture-jardin-guide.webp",
    width: 1024,
    height: 576,
  },
  {
    key: "blog-deco-salon",
    prompt:
      "Trendy modern living room interior, green velvet sofa, warm wood coffee table, gallery wall with framed art, houseplants, natural linen curtains, warm afternoon light, interior design photography, 8k",
    outputPath: "public/images/blog/idees-deco-salon.webp",
    width: 1024,
    height: 576,
  },
  {
    key: "blog-deco-murale",
    prompt:
      "Stylish gallery wall in a modern living room, mix of framed prints and photographs, wooden shelves with decorative objects, woven wall hanging, warm neutral tones, interior design photography, 8k",
    outputPath: "public/images/blog/decoration-murale-salon.webp",
    width: 1024,
    height: 576,
  },
  {
    key: "blog-dallage-terrasse",
    prompt:
      "Beautiful outdoor patio with large format stone tiles, modern garden furniture, Mediterranean plants in terracotta pots, pool edge visible, warm sunlight, professional architectural photography, 8k",
    outputPath: "public/images/blog/dallage-terrasse-guide.webp",
    width: 1024,
    height: 576,
  },
  {
    key: "blog-adoucisseur-eau",
    prompt:
      "Modern water softener system installed in a clean utility room, white cylindrical tank with blue accents, copper plumbing pipes, bright lighting, professional product photography, 8k",
    outputPath: "public/images/blog/adoucisseur-eau-guide.webp",
    width: 1024,
    height: 576,
  },
  {
    key: "blog-isolation-phonique",
    prompt:
      "Soundproofing installation in a modern apartment, acoustic panels being mounted on wall, worker with mineral wool insulation, clean bright room, professional construction photography, 8k",
    outputPath: "public/images/blog/isolation-phonique-guide.webp",
    width: 1024,
    height: 576,
  },
  // New articles taille
  {
    key: "blog-taille-laurier-rose",
    prompt:
      "Closeup of pink oleander flowers (Nerium oleander) being pruned with sharp garden secateurs, bright summer Mediterranean garden, lush green foliage, professional gardening photography, natural sunlight, 8k",
    outputPath: "public/images/blog/taille-laurier-rose.webp",
    width: 1024,
    height: 576,
  },
  {
    key: "blog-taille-prunier",
    prompt:
      "Gardener pruning a mature plum tree in a French garden, using loppers on thick branches, spring orchard scene, blossoming fruit tree branches, soft morning light, professional garden photography, 8k",
    outputPath: "public/images/blog/taille-prunier.webp",
    width: 1024,
    height: 576,
  },
  {
    key: "blog-taille-laurier-palme",
    prompt:
      "Close-up of hand pruning cherry laurel hedge (Prunus laurocerasus) with secateurs, large glossy green leaves, dense garden hedge background, professional gardening photography, natural daylight, 8k",
    outputPath: "public/images/blog/taille-laurier-palme.webp",
    width: 1024,
    height: 576,
  },
];

async function downloadImage(url: string, outputPath: string): Promise<void> {
  const response = await fetch(url);
  if (!response.ok || !response.body) {
    throw new Error(`Failed to download: ${response.statusText}`);
  }
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const fileStream = fs.createWriteStream(outputPath);
  await finished(Readable.fromWeb(response.body as any).pipe(fileStream));
}

async function generateImage(task: ImageTask): Promise<void> {
  const fullPath = path.resolve(task.outputPath);

  if (fs.existsSync(fullPath)) {
    console.log(`  [SKIP] ${task.key} — already exists at ${task.outputPath}`);
    return;
  }

  console.log(`  [GEN]  ${task.key} — generating...`);

  const output = await replicate.run("black-forest-labs/flux-schnell", {
    input: {
      prompt: task.prompt,
      num_outputs: 1,
      aspect_ratio: task.width > task.height ? "16:9" : "1:1",
      output_format: "webp",
      output_quality: 90,
    },
  });

  const imageUrl = Array.isArray(output) ? output[0] : output;

  if (typeof imageUrl === "string") {
    await downloadImage(imageUrl, fullPath);
  } else if (imageUrl && typeof imageUrl === "object" && "url" in imageUrl) {
    await downloadImage((imageUrl as any).url(), fullPath);
  } else {
    // ReadableStream from Replicate
    const chunks: Uint8Array[] = [];
    for await (const chunk of imageUrl as any) {
      chunks.push(chunk);
    }
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fullPath, Buffer.concat(chunks));
  }

  console.log(`  [OK]   ${task.key} — saved to ${task.outputPath}`);
}

async function main() {
  console.log("\n🌿 Génération des images du site\n");
  console.log(`   ${tasks.length} images à générer\n`);

  if (!process.env.REPLICATE_API_TOKEN) {
    console.error(
      "❌ REPLICATE_API_TOKEN manquant.\n" +
        "   Ajoutez-le dans .env.local ou exportez-le :\n" +
        "   export REPLICATE_API_TOKEN=r8_xxxxx\n"
    );
    process.exit(1);
  }

  for (const task of tasks) {
    try {
      await generateImage(task);
    } catch (err) {
      console.error(`  [ERR]  ${task.key} — ${err}`);
    }
    // Wait 12s between requests to respect rate limits
    await new Promise((r) => setTimeout(r, 12000));
  }

  console.log("\n✅ Terminé !\n");
}

main();
