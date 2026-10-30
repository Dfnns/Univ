<?php

namespace App\Http\Controllers;

use App\Models\HeroSection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;          

class HeroSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $hero = HeroSection::orderBy('created_at', 'desc')->get();
        return response()->json($hero);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'sub_judul' => 'nullable|string|max:255',
            'gambar' => 'nullable|image|max:2048', // max 2MB, harus file gambar
        ]);

        if ($request->hasFile('gambar')) {
            $path = $request->file('gambar')->store('hero_sections', 'public');
            $validated['gambar'] = $path;
        }

        $hero = HeroSection::create($validated);
        return response()->json($hero, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return response()->json(HeroSection);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'judul' => 'sometimes|required|string|max:255',
            'sub_judul' => 'nullable|string|max:255',
            'gambar' => 'nullable|image|max:2048', // max 2MB, harus file gambar
        ]);

        $hero = HeroSection::findOrFail($id);

        if ($request->hasFile('gambar')) {
            // hapus gambar lama biar nggak numpuk sampah file
            if ($hero->gambar) {
                Storage::disk('public')->delete($hero->gambar);
            }
            $path = $request->file('gambar')->store('hero_sections', 'public');
            $validated['gambar'] = $path;
        }

        $hero->update($validated);
        return response()->json($hero);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if($hero = HeroSection::find($id)) {
            // hapus gambar lama biar nggak numpuk sampah file
            if ($hero->gambar) {
                Storage::disk('public')->delete($hero->gambar);
            }
            $hero->delete();
            return response()->json(['message' => 'Hero section deleted successfully.']);
        } else {
            return response()->json(['message' => 'Hero section not found.'], 404);
        }
    }
}
