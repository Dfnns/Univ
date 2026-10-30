<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;

use App\Models\Berita;
use Illuminate\Http\Request;

class BeritaController extends Controller
{
    // GET /api/berita - ambil semua berita
    public function index()
    {
        $berita = Berita::orderBy('tanggal', 'desc')->get();
        return response()->json($berita);
    }

    // POST /api/berita - tambah berita baru
    public function store(Request $request)
{
    $validated = $request->validate([
        'judul' => 'required|string|max:255',
        'tanggal' => 'required|date',
        'deskripsi' => 'nullable|string',
        'gambar' => 'nullable|image|max:2048', // max 2MB, harus file gambar
    ]);

    if ($request->hasFile('gambar')) {
        $path = $request->file('gambar')->store('berita', 'public');
        $validated['gambar'] = $path;
    }

    $berita = Berita::create($validated);
    return response()->json($berita, 201);
}


    // GET /api/berita/{id} - ambil satu berita
    public function show(Berita $berita)
    {
        return response()->json($berita);
    }

    // PUT /api/berita/{id} - update berita
    public function update(Request $request, Berita $berita)
{
    $validated = $request->validate([      
        'judul' => 'sometimes|required|string|max:255',  
        'tanggal' => 'sometimes|required|date',
        'deskripsi' => 'nullable|string',
        'gambar' => 'nullable|image|max:2048', 
    ]);

    if ($request->hasFile('gambar')) {
        // hapus gambar lama biar nggak numpuk sampah file
        if ($berita->gambar) {
            Storage::disk('public')->delete($berita->gambar);
        }
        $path = $request->file('gambar')->store('berita', 'public');
        $validated['gambar'] = $path;
    }

    $berita->update($validated);
    return response()->json($berita);
}

    // DELETE /api/berita/{id} - hapus berita
    public function destroy(Berita $berita)
    {
        $berita->delete();
        return response()->json(['message' => 'Berita dihapus']);
    }
}